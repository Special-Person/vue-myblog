<template>
    <div>
        <div class="every_day">
            <p style="color: #bf6060;">每日一句 <i class="iconfont icon-laba"/></p>
            <p>VUE首页加载过慢，其原因是因为它是一个单页应用，需要将所有需要的资源都下载到浏览器端并解析。</p>
            <p>--------FontEndArt</p>
        </div>
        <div class="article_list">
            <div class="article">
                <span class="article_title"><a href="/">hugeorange</a></span>
                <p class="article_content">
                    首页白屏的原因： 单页面应用的 html 是靠 js 生成，因为首屏需要加载很大的js文件(app.js vendor.js)，所以当网速差的时候会产生一定程度的白屏
                    解决办法：
                    优化 webpack 减少模块打包体积，code-split 按需加载
                    服务端渲染，在服务端事先拼装好首页所需的 html
                    首页加 loading 或 骨架屏 （仅仅是优化体验）</p>
                <div class="article_foot">发布时间2018-10-30 | 浏览(372) | Tags: <a href="/">幽门螺杆菌</a> <a
                        href="/">萎缩性胃炎</a>
                </div>
            </div>
            <div class="article">
                <span class="article_title"><a href="/">hugeorange</a></span>
                <p class="article_content">
                    首页白屏的原因： 单页面应用的 html 是靠 js 生成，因为首屏需要加载很大的js文件(app.js vendor.js)，所以当网速差的时候会产生一定程度的白屏
                    解决办法：
                    优化 webpack 减少模块打包体积，code-split 按需加载
                    服务端渲染，在服务端事先拼装好首页所需的 html
                    首页加 loading 或 骨架屏 （仅仅是优化体验）</p>
                <div class="article_foot">发布时间2018-10-30 | 浏览(372) | Tags: <a href="/">幽门螺杆菌</a> <a
                        href="/">萎缩性胃炎</a>
                </div>
            </div>
        </div>
    </div>
</template>


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

            &:last-child {
                text-align: right;
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

                &:hover {
                    color: var(--size-color-hover);
                }
            }
        }
    }


</style>
