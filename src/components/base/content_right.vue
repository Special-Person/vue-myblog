<template>
    <div class="">
        <div class="right_module">
            <p class="module_title dazzle_color" style="animation-delay: 1s">随机标签云</p>
            <div class="module_content">
                <router-link :key="item.id" v-for="item in tags" :to="'/tag/' + item.tag" :style="randomTags()">
                    {{item.tag}}
                </router-link>
            </div>
        </div>
        <div class="right_module">
            <p class="module_title dazzle_color" style="animation-delay: 2s">最近热门</p>
            <ul class="module_list">
                <li v-for="item in titleList" :key="item.id">
                    <router-link :to="'/blogDetail/'+item.id">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="right_module">
            <p class="module_title dazzle_color" style="animation-delay: 3s">最新评论</p>
            <ul class="module_comment">
                <li class="comment" v-for="item in newComments">
                    <p class="comment_name">{{item.username}}<span>[{{item.ctime}}]</span></p>
                    <p class="comment_discribe">
                        <router-link :to="calBlogId(item.blog_id)">{{item.comments}}</router-link>
                    </p>
                </li>
            </ul>
        </div>
        <div class="right_module">
            <p class="module_title dazzle_color" style="animation-delay: 4s">友情链接</p>
            <ul class="module_link clearfix">
                <li v-for="item in friendShip">
                    <a :href="item.link">{{item.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {get} from "../../api";

    export default {
        data() {
            return {
                randomTitleColor: `color: rgb(50,60,70)`,
                tags: [],
                titleList: [],
                newComments: [],
                friendShip: []
            };
        },
        created() {

            get.queryNewComments().then(res => {
                this.newComments = res.data;
            });
            get.queryAllTag().then(res => {
                this.tags = this.shuffle(res.data);
            });
            get.queryHotBlog().then(res => {
                this.titleList = res.data;
            });
        },
        methods: {
            // 打乱数组
            shuffle(array) {
                let m = array.length;
                while (m) {
                    let i = Math.floor(Math.random() * m--);
                    [array[m], array[i]] = [array[i], array[m]];
                }
                return array;
            },
            calBlogId: (blogId) => {
                if(blogId === -1){
                    // 关于页
                    return "/about"
                } else if(blogId === -2){
                    // 留言页
                    return "/guestbook";
                } else if(blogId > -1){
                    // 博客详情页
                    return "/blogDetail/" + blogId
                } else {
                    return "/"
                }
            }
        },
        computed: {
            randomTags: () => () => {
                let randomColor = () => ((Math.random() * 160) >> 0) + 50;
                let color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
                let fontsize = Math.floor(Math.random() * 7) + 12;
                return `color: ${color};font-size: ${fontsize}px;`;
            }
        }

    };
</script>

<style lang="less" scoped>
    @import "../../assets/base";

    .right_module {
        text-align: left;
        border-radius: 10px;
        background-color: var(--header-bg);
        color: #fff;
        margin-bottom: 10px;

        .module_title {
            padding: 10px 15px;
            border-radius: 10px;
            background-color: #212121;
            .less-text-overflow-eclipse();
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
                .less-text-overflow-eclipse();

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
                .less-text-overflow-eclipse();

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
                .less-text-overflow-eclipse();

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
