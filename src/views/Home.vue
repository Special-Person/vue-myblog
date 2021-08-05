<template>
    <div>
        <div class="every_day">
            <p style="color: #bf6060;">每日一句 <i class="iconfont icon-laba"/></p>
            <p v-html="quote"/>
        </div>
        <div class="article_list">
            <div class="article" v-for="item in articleList" :key="item.id">
                <span class="article_title">
                    <router-link :to="'/'+item.id">{{item.title}}</router-link>
                </span>
                <p class="article_content" v-html="item.content" />
                <div class="article_foot">
                    发布于 {{dateFormat(item.ctime)}} | 浏览：{{item.views}} | Tags：
                    <a href="/" v-for="tag in item.tags">{{tag}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: "今天天气真好",

                articleList: [{
                    article_title: "Windows下使用zerotier时提示PORT_ERROR错误",
                    article_content: " ZeroTier是一款基于P2P的内网穿透工具，对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。加入后点击”show networks”查看网络状态，发现Status为&...",
                    article_ctime: "2021-03-05",
                    article_browse: 1382,
                    article_tags: ["zerotier", "内网穿透"]
                }, {
                    article_title: "PHP在Windows环境下获取GMT时间",
                    article_content: "在调用讯飞语音合成(流式版)接口时，它要求传入date参数为GMT时间，类似这样“Thu, 01 Aug 2019 01:53:21 GMT”。使用它默认的demo测试时，发现一直提示401 Unauthorized错误，官方说明是认证签名错误。官方提供的PHP版demo中，其中获取GMT时间是这样的：$date = gmstrftime(\"%a, %d %b %Y %T %Z\", time());一步步的检查发现签名串中的date是空值，但看上去代码并...",
                    article_ctime: "2021-02-25",
                    article_browse: 442,
                    article_tags: ["GMT", "php"]
                }, {
                    article_title: "买了台任天堂Switch",
                    article_content: "年前腊月28，趁着海关还能正常清关，赶紧下单了台日版switch，体验一下新潮的数码产品。。。某东全球购自营购入，不得不称赞一下某东的速度是真的牛逼飞起，两天时间下单到清关完成，两天半的小时物流配送，到初二上午配送，一共五天时间到手！香港地区是使用的永利八达通物流，所以包装上除了京东仓的面单外，还会有八达通的快递单。快递纸盒内只有一圈气囊防震。...",
                    article_ctime: "2021-02-18",
                    article_browse: 792,
                    article_tags: ["switch"]
                }]
            };
        },
        created() {
            //  请求every_day数据
            this.$axios({
                url: "/api/queryEveryDay",
                method: "get"
            }).then(res => {
                this.quote = res.data && res.data.data[0].content;
            }).catch(err => {
                console.log("请求失败每日一句", err);
            });

            // 请求所有文章
            this.$axios({
                url: "/api/queryBlogByPage?page=0&pageSize=10",
                method: "get"
            }).then(res => {
                this.articleList = res.data && res.data.data || [];
            }).catch(err => {
                console.log("请求失败每日一句", err);
            });
        },
        methods: {
            // 格式化文章时间
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

    .every_day {
        background-color: #fff;
        width: 100%;
        text-align: left;
        border-radius: 5px;
        box-shadow: 2px 2px 5px #888;
        padding: 10px 15px;
        box-sizing: border-box;

        p {
            &:first-child {
                font-size: 18px;
            }

            &:not(:first-child) {
                font-size: 14px;
                margin-top: 5px;
            }

            .pull-right {
                float: right;
            }
        }

    }

    .article {
        display: inline-block;
        background-color: #fff;
        width: 100%;
        text-align: left;
        border-radius: 5px;
        box-shadow: 2px 2px 5px #888;
        margin-top: 10px;
        box-sizing: border-box;

        span {
            display: block;
            padding: 10px 15px 0;
            font-size: 18px;
        }

        p {
            padding: 0 15px;
            margin: 5px 0;
            font-size: 14px;
            word-break: break-word;
        }

        .article_foot {
            background-color: var(--header-bg);
            padding: 5px 15px;
            color: var(--size-color);
            font-size: 14px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

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
