<template>
    <div class="message">
        <div class="title">关于：目前有82 条留言</div>
        <ul class="comments_list">
            <li>
                <p class="comment_title">
                    <img src="https://www.zh30.com/avatar/default.jpg" alt="用户评论头像" class="img-circle">
                    <span class="comment_name">松松：</span>
                    <span>发表于 2021年03月10日 21:30</span>
                    <span>[回复]</span>
                </p>
                <p class="comment_content">奥利给</p>
                <ul class="comment_child">
                    <li>
                        <p class="comment_title">
                            <img src="https://www.zh30.com/avatar/default.jpg" alt="用户评论头像" class="img-circle">
                            <span class="comment_name">松松：</span>
                            <span>发表于 2021年03月10日 21:30</span>
                            <span>[回复]</span>
                        </p>
                        <p class="comment_content">奥利给</p>
                    </li>
                </ul>
            </li>
            <li>
                <p class="comment_title">
                    <img src="https://www.zh30.com/avatar/default.jpg" alt="用户评论头像" class="img-circle">
                    <span class="comment_name">松松：</span>
                    <span>发表于 2021年03月10日 21:30</span>
                    <span>[回复]</span>
                </p>
                <p class="comment_content">奥利给</p>
            </li>
            <li>
                <p class="comment_title">
                    <img src="https://www.zh30.com/avatar/default.jpg" alt="用户评论头像" class="img-circle">
                    <span class="comment_name">松松：</span>
                    <span>发表于 2021年03月10日 21:30</span>
                    <span>[回复]</span>
                </p>
                <p class="comment_content">奥利给</p>
                <ul class="comment_child">
                    <li>
                        <p class="comment_title">
                            <img src="https://www.zh30.com/avatar/default.jpg" alt="用户评论头像" class="img-circle">
                            <span class="comment_name">松松：</span>
                            <span>发表于 2021年03月10日 21:30</span>
                            <span>[回复]</span>
                        </p>
                        <p class="comment_content">奥利给</p>

                    <li>
                        <p class="comment_title">
                            <img src="https://www.zh30.com/avatar/default.jpg" alt="用户评论头像" class="img-circle">
                            <span class="comment_name">松松：</span>
                            <span>发表于 2021年03月10日 21:30</span>
                            <span>[回复]</span>
                        </p>
                        <p class="comment_content">奥利给</p>
                    </li>
                    <li>
                        <p class="comment_title">
                            <img src="https://www.zh30.com/avatar/default.jpg" alt="用户评论头像" class="img-circle">
                            <span class="comment_name">松松：</span>
                            <span>发表于 2021年03月10日 21:30</span>
                            <span>[回复]</span>
                        </p>
                        <p class="comment_content">奥利给</p>
                    </li>
                </ul>
            </li>
        </ul>
        <!--   分页     -->
        <div class="respond">
            <div class="respond_title">发表评论</div>
            <p>
                <input type="text" placeholder="昵称" name="username">
                <input type="text" placeholder="邮箱 (评论被回复时你能收到通知)" name="email">
            </p>
            <p>
                <textarea name="content" id="" placeholder="无意义内容我可能不会回复你"/>
            </p>
            <p>
                <input type="text" name="idcode" placeholder="验证码">
            </p>
            <p>
                <input type="submit" name="send" value="提交留言">
                <input type="submit" name="rewrite" value="重写">
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message"
    };
</script>

<style lang="less" scoped>
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
        }

        .comment_name {
            font-weight: bold;
        }

        .comment_child {
            margin-top: 10px;
            margin-left: 50px;

            border-radius: 5px;
            font-size: 14px;
            color: #31708f;
            border: 1px dashed #7ca4c1;
            background: #d9edf7;
            padding: 10px 10px 0;

            li {
                margin-bottom: 10px;
            }
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
            max-width: calc(100% - 24px);
            min-width: 200px;
            min-height: 100px;
            max-height: 300px;
        }

        [type="text"]{
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

        [name="username"]{
            width: 33%;
        }
        [name="email"]{
            width: 57%;
        }
    }
</style>
