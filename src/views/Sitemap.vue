<template>
    <div class="sitemap_list">
        <div class="sitemap">
            <p class="title">最新文章</p>
            <ul>
                <li v-for="item in news">
                    <router-link :to="'/blogDetail/'+item.id">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="sitemap">
            <p class="title">分类</p>
            <ul>
                <li v-for="item in classify">
                    <!-- tag id -->
                    <router-link :to="'/tag/' + item.tag">{{item.tag}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {get} from "../api";

    export default {
        name: "Sitemap",
        data() {
            return {
                classify: [],
                news: []
            };
        },
        created() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            get.queryAllBlog().then(res => {
                this.news = res.data;
            });
            get.queryAllTag().then(res => {
                this.classify = res.data
            })
        }
    };
</script>

<style lang="less" scoped>
    @import "../assets/base";

    .sitemap_list {
        margin: 20px 0 50px;
    }

    .sitemap {
        text-align: left;

        .title {
            font-size: 22px;
            border-bottom: 1px solid #000;
            .less-text-exceeded();

        }

        li {
            list-style: disc;
            margin: 8px 0 0 45px;
            .less-text-exceeded();

            a {
                font-size: 14px;
                text-decoration: underline;

                &:hover {
                    color: var(--size-color-hover);
                }
            }
        }
    }
</style>
