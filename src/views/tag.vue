<template>
    <div class="tag">
        <div class="article_list">
            <div class="article" v-for="item in articleList" :key="item.id">
                <span class="article_title">
                    <router-link :to="'/blogDetail/'+item.id">{{item.title}}</router-link>
                </span>
                <div class="article_content" v-html="item.content"/>
                <div class="article_foot">
                    发布于 {{dateFormat(item.ctime)}} | 浏览：{{item.views}} | Tags：
                    <router-link :to="'/tag/'+tag" v-for="tag in item.tags" :key="item.id">{{tag}}</router-link>
                </div>
            </div>
        </div>
        <display-page v-if="pageTotalCount" :pageIndex="page" :pageSize="pageSize" :total="pageTotalCount"
                      @handleClick="handleClick"/>
    </div>
</template>

<script>
    import DisplayPage from "../components/displayPage";
    import {get} from "../api";
    import {scrollTop} from "../assets/util";

    export default {
        name: "tag",
        components: {DisplayPage},
        data() {
            return {
                page: 1,
                pageSize: 10,
                pageTotalCount: 0,
                articleList: []
            };
        },
        created() {
            scrollTop();
            this.queryTagByTags(this.page);
        },
        methods: {
            handleClick(curIndex) {
                this.queryTagByTags(curIndex);
            },
            queryTagByTags(page) {
                get.queryTagByTags({
                    tag: this.$route.params.id,
                    page: (page - 1),
                    pageSize: this.pageSize
                }).then(res => {
                    let data = res.data && res.data || [];
                    this.cutOut(data);
                    this.articleList = data;
                });
            },
            // 格式化文章时间
            dateFormat(str) {
                let oDate = new Date(str * 1000),
                    oYear = oDate.getFullYear(),
                    oMonth = oDate.getMonth() + 1,
                    oDay = oDate.getDate();

                oMonth = oMonth < 10 ? "0" + oMonth : oMonth;
                oDay = oDay < 10 ? "0" + oDay : oDay;

                return oYear + "-" + oMonth + "-" + oDay;
            },
            cutOut(data) {
                let oDiv = document.createElement("div");
                // 截断处理， 剔除图片展示
                data = data.map(item => {
                    // 删除图片
                    item.content = item.content.replace(/<img[^<>]*">/g, "");

                    oDiv.innerHTML = item.content;

                    // 最多只展示200个字
                    if (oDiv.innerText.length > 200) {
                        oDiv.innerText = oDiv.innerText.substring(0, 200) + "...";
                    }

                    item.content = oDiv.innerHTML;

                    return item;
                });

                oDiv = null;
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../assets/base";

    .article {
        display: inline-block;
        background-color: #fff;
        width: 100%;
        text-align: left;
        border-radius: 5px;
        box-shadow: 2px 2px 5px #888;
        margin-top: 10px;
        box-sizing: border-box;

        .article_title {
            display: block;
            padding: 10px 15px 0;
            font-size: 18px;
            .less-text-exceeded();

            a:hover {
                color: var(--size-color-hover);
            }
        }

        .article_content {
            padding: 0 15px;
            margin: 5px 0;
            font-size: 14px;
            .less-text-exceeded();
        }

        .article_foot {
            background-color: var(--header-bg);
            padding: 5px 15px;
            color: var(--size-color);
            font-size: 14px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            .less-text-exceeded();

            a {
                color: var(--size-color);
                margin-right: 5px;
                text-decoration: underline;

                &:hover {
                    color: var(--size-color-hover);
                }
            }
        }
    }
</style>
