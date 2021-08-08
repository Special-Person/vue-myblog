<template>
    <div class="about">
        <div class="about_me">
            <p class="title">关于我</p>
            <p>
                博主
                <router-link to="/">高友麒</router-link>
                ，现居江西省南昌市，算是00后小青年。<br/>
                会修电脑的野生程序员<br/>
                内向闷骚老司机<br/>
                多年PHP开发，技术一般<br/>
                PHP是世界上最好的语言
            </p>
        </div>
        <div class="about_message">
            <message @handleClick="handleClick" :msgId=-1 />
        </div>
    </div>
</template>

<script>
    import Message from "@/components/message";
    import {post} from "../api";
    import {scrollTop} from "../assets/util";

    export default {
        name: "About",
        components: {
            Message
        },
        created() {
            scrollTop();
        },
        methods: {
            handleClick(val) {
                // 发表评论
                post.addComment({
                    blog_id: -1,
                    username: val.username,
                    comments: val.content,
                    email: val.email,
                    parent: val.reply,
                    parentName: val.replyName
                }).then(res => {
                    if(res.status.toString() === "success" ){
                        alert("评论成功");
                        this.$router.go(0);
                    }
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../assets/base";

    .about_me {
        background-color: #fff;
        width: 100%;
        text-align: left;
        border-radius: 5px;
        box-shadow: 2px 2px 5px #888;
        padding: 10px 15px;
        margin-bottom: 10px;
        box-sizing: border-box;

        .title {
            font-size: 24px;
            font-weight: bold;
            border-bottom: 1px solid #888;
        }

        p {
            padding: 10px 0;
            font-size: 16px;
            color: #333;
            .less-text-exceeded();

            a {
                color: var(--size-color-hover);
            }
        }
    }
</style>
