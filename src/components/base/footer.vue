<template>
    <div class="footer">
        <p>
            <a href="/" v-for="item in footerLink">{{item}}</a>
        </p>
        <p>Copyright © 2010-2021 个人博客 All rights reserved. 由免费开源的WordPress强力驱动. 鲁ICP备14017955号-1</p>
    </div>
</template>

<script>
    export default {
        name: "myfooter",
        data(){
            return{
                footerLink: ["C/C++", "CSS/DIV", "java", "javacript", "Linux", "Mac", "PC技术", "PHP", "Python", "Raspberry", "Ubuntu", "wordpress", "关于SEO", "分享经验", "听听音乐", "幽默搞笑", "建站经验", "新闻资讯", "模拟飞行", "片言碎语", "玩转手机", "编程基础", "视频分享"]
            }
        }
    };
</script>

<style lang="less" scoped>
    .footer{
        background: var(--header-bg);
        padding: 20px 0;
        text-align: center;
        a{
            margin: 0 5px;
            font-size: 14px;
            color: var(--size-color);
            &:hover{
                color: var(--size-color-hover);
            }
        }
        p{
            &:last-child{
                font-size: 12px;
                color: #5d5d5d;
                margin-top: 10px;
            }
        }
    }
</style>
