<template>
    <div class="guestbook">

        <div class="description">
            <p>1.欢迎灌水交流，我只是懒不经常更新。一直在线，你的留言我一般会最快回复~</p>
            <p class="font-red">2.友链只交换技术类个人博客或相关行业。本博客长期稳定在线，所以也需要你的站尽量稳定，三天两头打不开的我会直接删除友链不另行通知。</p>
            <p class="font-red">3.本博客除悬挂谷歌广告(基本0收益)外为无其它任何收益，仅作为技术内容分享使用。除交换友链与答复留言提问外不与任何人或行为产生互动。</p>
        </div>
        <message @handleClick="handleClick" :msgId=-2 />
    </div>
</template>

<script>
    import Message from "@/components/message";
    import {post} from "../api";
    import {scrollTop} from "../assets/util";

    export default {
        name: "Guestbook",
        components: {
            Message
        },
        created() {
            scrollTop();
        },
        methods: {
            handleClick(val){
                // 发表评论
                post.addComment({
                    blog_id: -2,
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
    .guestbook {
        text-align: left;
    }

    .description {
        background-color: #fff;
        width: 100%;
        text-align: left;
        border-radius: 5px;
        box-shadow: 2px 2px 5px #888;
        padding: 10px 15px;
        margin-bottom: 10px;
        box-sizing: border-box;

        p {
            padding: 10px 0;
            font-size: 16px;
            color: #333;

            a {
                color: var(--size-color-hover);
            }
        }

        .font-red {
            color: red;
        }
    }
</style>
