<template>
    <div id="app">
        <MyHeader/>
        <div class="content">
            <div class="content_left">
                <router-view/>
            </div>
            <div class="content_right">
                <my-content-right/>
            </div>
        </div>
        <MyFooter/>
    </div>
</template>

<script>
    import MyHeader from "@/components/base/header.vue";
    import MyFooter from "@/components/base/footer.vue";
    import MyContentRight from "@/components/base/content_right.vue";

    export default {
        components: {
            MyHeader,
            MyFooter,
            MyContentRight
        }
    };
</script>

<style lang="less">
    @import './assets/iconfont.css';

    /* base */
    :root {
        --size-color: #fefefe;
        --size-color-hover: #7cb9de;
        --header-bg: #313131;
        --body-bg: #f5f7f9;
    }

    .clearfix::after {
        content: "";
        clear: both;
        display: block;
        font-size: 0;
    }

    * {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    li {
        list-style: none;
    }

    body {
        background: var(--body-bg);
        position: relative;
        text-align: center;
        font-size: 16px;
    }

    input {
        outline: none;
    }


    .content {
        display: inline-block;
        position: relative;
        width: 1170px;
        margin: 80px auto 0;
    }

    .content_left {
        float: left;
        width: 66%;
        padding-right: 20px;
        box-sizing: border-box;
    }

    .content_right {
        float: right;
        width: 33%;
        box-sizing: border-box;
    }
</style>
