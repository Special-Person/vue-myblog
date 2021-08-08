<template>
    <div class="message">
        <div class="title">关于：目前有{{pageTotalCount}} 条留言</div>
        <ul class="comments_list">
            <li v-for="comment in comments">
                <div class="comment_title">
                    <img src="https://www.zh30.com/avatar/default.jpg" alt="用户评论头像" class="img-circle">
                    <p class="comment_name" v-if="comment.parent > -1">
                        <span>{{comment.username}}</span>
                        回复
                        <span>@{{comment.parent_name}}</span>:
                    </p>
                    <p class="comment_name" v-else>
                        <span>{{comment.username}}</span>:
                    </p>
                    <span>发表于 {{dateFormat(comment.ctime)}}</span>
                    <span @click="ClickReply(comment.id, comment.username)">[回复]</span>
                </div>
                <p class="comment_content">{{comment.comments}}</p>
            </li>
        </ul>
        <!--   分页     -->
        <display-page v-if="pageTotalCount > 10" :pageIndex="page" :pageSize="pageSize" :total="pageTotalCount"
                      @handleClick="handleClick"/>
        <div class="respond" ref="respond">
            <div class="respond_title">发表评论</div>
            <p>
                <input type="hidden" v-model="reply">
                <input type="hidden" v-model="replyName">
            </p>
            <p>
                <input type="text" ref="username" v-model="username" autocomplete="off" placeholder="昵称"
                       name="username">
                <input type="text" v-model="email" autocomplete="off" placeholder="邮箱 (评论被回复时你能收到通知)" name="email">
            </p>
            <p>
                <textarea name="content" v-model="content" id="" placeholder="无意义内容我可能不会回复你"/>
            </p>
            <p>
                <input type="text" v-model="captchas" autocomplete="off" name="captchas" placeholder="验证码">
                <span v-html="captchasCode" @click="queryRandomCode"/>
            </p>
            <p>
                <input type="submit" name="send" @click="handleClickRespond" value="提交留言">
                <input type="submit" name="rewrite" @click="clearInputVal" value="重写">
            </p>
        </div>
    </div>
</template>

<script>
    import {get} from "../api";
    import DisplayPage from "./displayPage";

    export default {
        name: "message",
        components: {DisplayPage},
        props: {
            msgId: {
                type: Number
            }
        },
        data() {
            return {
                username: "", // 发送评论者的昵称
                email: "", // 发送评论者的邮箱
                content: "", // 发送评论者的内容
                captchas: "", // 验证码
                captchasCode: "", // 验证码图片
                CaptchasReg: "", // 正确的验证码
                reply: -1, // 被评论人的id
                replyName: 0, // 被评论人的昵称
                comments: [], // 评论列表
                page: 1, // 翻页
                pageSize: 10, // 每次显示条数
                pageTotalCount: 0 // 总数
            };
        },
        created() {
            this.queryComments(this.page);
            this.queryRandomCode();
            this.queryCommentsCountByBlodId();
        },
        methods: {
            // 翻页评论
            handleClick(curIndex) {
                this.queryComments(curIndex);
            },
            // 点击跳到最底下评论处
            ClickReply(commentId, username) {
                window.scrollTo({top: this.$refs.respond.offsetTop + 20, behavior: "smooth"});
                this.$refs.username.focus();
                this.reply = commentId;
                this.replyName = username;
            },
            // 请求总条数
            queryCommentsCountByBlodId() {
                get.queryCommentsCountByBlodId({
                    blog_id: this.msgId
                }).then(res => {
                    this.pageTotalCount = res.data.count;
                });
            },
            queryComments(page) {
                get.queryCommentsByBlodId({
                    blog_id: this.msgId,
                    page: page - 1,
                    pageSize: this.pageSize
                }).then(res => {
                    this.comments = res.data;
                });
            },

            queryRandomCode() {
                get.queryRandomCode().then(res => {
                    const {data, text} = res.data;
                    this.captchasCode = data;
                    this.CaptchasReg = text;
                });
            },
            handleClickRespond() {
                const {username, email, content, reply, replyName, captchas, CaptchasReg} = this.$data;
                if (captchas.toLowerCase() !== CaptchasReg.toLowerCase()) {
                    alert("验证码错误，请重新输入");
                    this.queryRandomCode(); // 重新发起请求
                    return;
                }
                this.$emit("handleClick", {username, email, content, reply, replyName});
            },
            // 格式化文章时间
            dateFormat(str) {
                let oDate = new Date(str * 1000),
                    oYear = oDate.getFullYear(),
                    oMonth = oDate.getMonth() + 1,
                    oDay = oDate.getDate(),
                    oHour = oDate.getHours(),
                    oMin = oDate.getMinutes();

                oMonth = oMonth < 10 ? "0" + oMonth : oMonth;
                oDay = oDay < 10 ? "0" + oDay : oDay;
                oHour = oHour < 10 ? "0" + oHour : oHour;
                oMin = oMin < 10 ? "0" + oMin : oMin;

                return `${oYear}年${oMonth}月${oDay}日 ${oHour}:${oMin}`;
            },
            clearInputVal() {
                this.username = "";
                this.email = "";
                this.content = "";
                this.captchas = "";
                this.reply = -1;
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../assets/base";

    .message {
        text-align: left;

        .title {

            margin-bottom: 10px;
        }
    }

    .comments_list > li {
        border: 1px dashed #7ca4c1;
        background: #d9edf7;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        font-size: 14px;
        color: #31708f;

        p, img {
            vertical-align: middle;
        }

        img {
            border-radius: 50%;
            margin-right: 10px;
        }


        .comment_title {
            margin-bottom: 10px;
            .less-text-overflow-eclipse();

            & > span {
                vertical-align: middle;
            }

            & > span:last-child {
                margin-left: 5px;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .comment_name {
            vertical-align: middle;
            display: inline-block;
            margin-right: 5px;

            span {
                font-weight: bold;
            }
        }

        .comment_content {
            .less-text-exceeded();
        }
    }

    .respond {
        background-color: #fff;
        width: 100%;
        text-align: left;
        border-radius: 5px;
        box-shadow: 2px 2px 5px #888;
        padding: 10px 15px;
        margin-bottom: 10px;
        box-sizing: border-box;

        .respond_title {
            .less-text-overflow-eclipse();
        }

        p {
            margin-top: 15px;
        }

        input {
            border-radius: 5px;
            border: 1px solid #ccc;
            background: #fff;
            padding: 6px 12px;
            outline: none;
            height: 34px;
            box-sizing: border-box;
            margin-right: 15px;
        }

        textarea {
            border-radius: 5px;
            border: 1px solid #ccc;
            background: #fff;
            padding: 6px 12px;
            outline: none;

            &:focus {
                border-color: var(--size-color-hover);
            }
        }

        [name="content"] {
            width: 100%;
            max-width: 100%;
            min-width: 200px;
            min-height: 100px;
            max-height: 300px;
            box-sizing: border-box;
        }

        [type="text"] {
            &:focus {
                border-color: var(--size-color-hover);
            }
        }

        [type="submit"] {
            cursor: pointer;
        }

        [type="submit"]:hover {
            color: var(--size-color-hover);
            border-color: var(--size-color-hover);
        }

        [name="username"] {
            width: 33%;
        }

        [name="email"] {
            width: 57%;
        }

        span {
            vertical-align: middle;
            cursor: pointer;
            display: inline-block;
            width: 100px;
            height: 34px;
        }
    }
</style>
