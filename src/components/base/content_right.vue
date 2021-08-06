<template>
    <div class="">
        <div class="right_module">
            <p class="module_title dazzle_color" style="animation-delay: 1s">随机标签云</p>
            <div class="module_content">
                <router-link :key="index" v-for="(item, index) in tags" to="/" :style="randomTags()">{{item}}
                </router-link>
            </div>
        </div>
        <div class="right_module">
            <p class="module_title dazzle_color" style="animation-delay: 2s">最近热门</p>
            <ul class="module_list">
                <li v-for="item in titleList">
                    <router-link :to="item.link">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="right_module">
            <p class="module_title dazzle_color" style="animation-delay: 3s">最新评论</p>
            <ul class="module_comment">
                <li class="comment" v-for="item in 0">
                    <p class="comment_name">代码狗<span>[三天前]</span></p>
                    <p class="comment_discribe">
                        <router-link to="/">抱歉，由于种种原因，本站不再链接至贵站</router-link>
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
    export default {
        data() {
            return {
                randomTitleColor: `color: rgb(50,60,70)`,
                tags: ["拉登", "指针", "php分页", "seo", "telnet", "selenium", "win7", "dedecms", "SpaceShuttleMission", "数据结构", "git", "E6", "外链", "C语言", "nginx", "Sunshine Girl", "css+div", "C++", "mysql", "cpanel", "音乐", "php", "python", "搞笑", "独立博客", "Rewrite", "DCS黑鲨", "vagrant", "蛋疼", "分区", "模拟航天飞机", "个人博客", "session", "灯泡姑娘", "wordpress", "mac", "laravel", "五笔", "伤不起", "博客优化", "摄像头", "树莓派", "模拟飞行", "游戏", "博客"],
                titleList: [
                    {title: "使用码云git的webhook实现生产环境代", link: "/"},
                    {title: "VirtualBox压缩vmdk、vagrant打包b", link: "/"},
                    {title: "初烧盲狙一条铁三角e40", link: "/"},
                    {title: "树莓派安装homebridge小记", link: "/"},
                    {title: "【更新】PC端微信(2.6.7.57)防撤回", link: "/"},
                    {title: "注册谷歌时提示\"此电话号码无法用于进", link: "/"}
                ],
                friendShip: [
                    {title: "挨踢茶馆", link: "/"},
                    {title: "佛布朗斯基", link: "/"},
                    {title: "kTWO博客", link: "/"},
                    {title: "Lizenghai's Blog", link: "/"},
                    {title: "个人博客", link: "/"},
                    {title: "Skymoon", link: "/"},
                    {title: "网讯IT资讯", link: "/"},
                    {title: "docker技术网站", link: "/"},
                    {title: "Yusure的个人博客", link: "/"},
                    {title: "小张个人博客", link: "/"},
                    {title: "柚子工具", link: "/"},
                    {title: "陆鉴鑫的博客", link: "/"},
                    {title: "薛才杰个人博客", link: "/"},
                    {title: "TENNFY", link: "/"},
                    {title: "萌新blog", link: "/"}
                ]
            };
        },
        computed: {
            randomTags: () => () => {
                let color = "#";
                for (let i = 0; i < 6; i++) {
                    color += Math.floor(Math.random() * 16).toString(16);
                }

                let fontsize = Math.floor(Math.random() * (18 - 12 + 1)) + 12;

                return `color: ${color};font-size: ${fontsize}px;`;
            }
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
            border-radius: 10px;
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
