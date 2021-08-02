<template>
    <header class="header">
        <div class="container clearfix">
            <router-link to="/" class="title">我的个人博客 | 技术博客</router-link>
            <ul class="menu">
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/sitemap">地图</router-link></li>
                <li><router-link to="/">关于</router-link></li>
                <li><router-link to="/">留言</router-link></li>
            </ul>
            <div class="search-bar">
                <input type="text" placeholder="输入关键字查找"/>
                <button>搜索</button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "myheader"
    };
</script>

<style lang="less" scoped>
    .header {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 50px;
        background: var(--header-bg);
    }

    .container {
        position: relative;
        width: 1170px;
        height: 50px;
        margin: 0 auto;
    }

    .title {
        display: inline-block;
        float: left;
        color: var(--size-color);
        line-height: 50px;
    }

    .menu {
        float: left;
        margin-left: 15px;

        li {
            display: inline-block;
            height: 50px;
            line-height: 50px;
            margin: 0 5px;

            a {
                display: block;
                color: var(--size-color);
                padding: 0 10px;

                &:hover {
                    color: var(--size-color-hover);
                }
            }
        }
    }

    .search-bar {
        float: right;

        input {
            float: left;
            height: 22px;
            padding: 5px 10px;
            border: none;
            margin-top: 9px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        button {
            float: left;
            height: 32px;
            padding: 5px 10px;
            margin-top: 9px;
            border: none;
            box-sizing: border-box;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            background: #5a5a5a;
            color: var(--size-color);
            cursor: pointer;
            transition: background-color, color .5s;
            border-left: 1px solid #5a5a5a;

            &:active {
                background: var(--size-color);
                color: #313131;
            }
        }

    }

</style>
