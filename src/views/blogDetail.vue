<template>
    <div class="blog_detail">
        <div class="detail">
            <div class="blog_title">{{title}}</div>
            <div class="blog_msg">
                分类:
                <router-link to="/search" v-for="item in tags" class="blog_tag">{{item}}</router-link>
                发布于: {{ctime}}
                浏览: {{views}}
            </div>
            <div class="blog_content" v-html="content"></div>
        </div>
        <message @handleClick="handleClick" :msgId="+$route.params.id"/>
    </div>
</template>

<script>
    import Message from "../components/message";
    import {get, post} from "../api";

    export default {
        name: "blog_detail",
        components: {Message},
        data() {
            return {
                title: "",
                content: "",
                ctime: "",
                tags: "",
                views: ""
            };
        },
        created() {
            get.queryBlog({mgsId: this.$route.params.id})
                .then(res => {
                    const {
                        title = "没找到",
                        content = "没找到",
                        ctime = "没找到",
                        tags = "没找到",
                        views = "没找到"
                    } = res.data;
                    this.title = title;
                    this.content = content;
                    this.ctime = this.dateFormat(ctime);
                    this.tags = tags.split(",");
                    this.views = views;
                });
        },
        methods: {
            handleClick(val) {
                // 发表评论
                post.addComment({
                    blog_id: this.$route.params.id,
                    username: val.username,
                    comments: val.content,
                    email: val.email,
                    parent: val.reply,
                    parentName: val.replyName
                }).then(res => {
                    if (res.status.toString() === "success") {
                        alert("评论成功");
                        this.$router.go(0);
                    }
                });
            },
            dateFormat(str) {
                let oDate = new Date(str * 1000),
                    oYear = oDate.getFullYear(),
                    oMonth = oDate.getMonth() + 1,
                    oDay = oDate.getDate();

                oMonth = oMonth < 10 ? "0" + oMonth : oMonth;
                oDay = oDay < 10 ? "0" + oDay : oDay;

                return oYear + "-" + oMonth + "-" + oDay;
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../assets/base";

    .detail {
        background-color: #fff;
        width: 100%;
        text-align: left;
        border-radius: 5px;
        box-shadow: 2px 2px 5px #888;
        padding: 10px 15px;
        margin-bottom: 10px;
        box-sizing: border-box;

        .blog_title {
            font-size: 24px;
            font-weight: bold;
        }

        .blog_msg {
            border-bottom: 1px solid gray;
            padding: 10px 0 20px;
            margin-bottom: 20px;
        }

        .blog_content {
            .less-text-exceeded()
        }
    }

</style>
