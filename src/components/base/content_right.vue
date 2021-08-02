<template>
    <div class="">
        <div class="right_module">
            <p class="module_title">随机标签云</p>
            <div class="module_content">
                <router-link v-for="item in 20" to="/">asd</router-link>
            </div>
        </div>
        <div class="right_module">
            <p class="module_title">最近热门</p>
            <ul class="module_list">
                <li v-for="item in 3">
                    <router-link to="/">查看服务器{{item}}</router-link>
                </li>
            </ul>
        </div>
        <div class="right_module">
            <p class="module_title">最新评论</p>
            <ul class="module_comment">
                <li class="comment" v-for="item in 3">
                    <p class="comment_name">代码狗<span>[三天前]</span></p>
                    <p class="comment_discribe">
                        <router-link to="/">抱歉，由于种种原因，本站不再链接至贵站</router-link>
                    </p>
                </li>
            </ul>
        </div>
        <div class="right_module">
            <p class="module_title">友情链接</p>
            <ul class="module_link clearfix">
                <li v-for="item in 3">
                    <a href="/">IT 训练</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>


    .right_module {
        text-align: left;
        border-radius: 10px;
        background-color: var(--header-bg);
        color: #fff;
        margin-bottom: 10px;

        .module_title {
            padding: 10px 15px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: #212121;
        }

        .module_content {
            padding: 10px 15px;
            word-wrap: break-word;
        }

        .module_content a {
            color: var(--size-color);
            font-size: 14px;
            margin: 0 5px;

            &:hover {
                text-decoration: underline;
            }
        }

        .module_list {
            padding: 5px 0 10px 0;

            li {
                padding: 5px 15px;
                height: 30px;
                line-height: 30px;

                &:not(:last-child) {
                    border-bottom: 1px dashed #444;
                }

                a {
                    color: var(--size-color);
                    font-size: 14px;

                    &:hover {
                        color: var(--size-color-hover);
                    }
                }
            }
        }

        .module_comment {
            .comment {
                padding: 5px 15px;

                &:not(:last-child) {
                    border-bottom: 1px dashed #444;
                }

                .comment_name {
                    color: var(--size-color);
                    font-weight: bold;
                    font-size: 14px;

                    span {
                        float: right;
                    }
                }

                .comment_discribe a {
                    color: #5d5d5d;
                    margin-top: 5px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 14px;

                    &:hover {
                        color: var(--size-color-hover);
                    }
                }
            }
        }

        .module_link {
            padding: 10px 0;

            li {
                float: left;
                width: 50%;
                height: 30px;
                line-height: 30px;
                border-bottom: 1px dashed #444;
                padding: 0 15px;
                box-sizing: border-box;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;

                a {
                    color: var(--size-color);
                    text-align: left;
                    width: 100%;
                    font-size: 14px;
                    &:hover {
                        color: var(--size-color-hover);
                    }
                }
            }
        }
    }
</style>
