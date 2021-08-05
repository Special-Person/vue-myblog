<template>
    <div class="sitemap_list">
        <div class="sitemap">
            <p class="title">最新文章</p>
            <ul>
                <li v-for="item in news">
                    <router-link to="/">{{item}}</router-link>
                </li>
            </ul>
        </div>
        <div class="sitemap">
            <p class="title">分类</p>
            <ul>
                <li v-for="item in footerLink">
                    <router-link to="/">{{item}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sitemap",
        data() {
            return {
                footerLink: ["C/C++", "CSS/DIV", "java", "javacript", "Linux", "Mac", "PC技术", "PHP", "Python", "Raspberry", "Ubuntu", "wordpress", "关于SEO", "分享经验", "听听音乐", "幽默搞笑", "建站经验", "新闻资讯", "模拟飞行", "片言碎语", "玩转手机", "编程基础", "视频分享"],
                news: ["Windows下使用zerotier时提示PORT_ERROR错误", "PHP在Windows环境下获取GMT时间", "买了台任天堂Switch", "【VB】vb各种求1-100内的素数", "lnmp1.7安装环境后mysql无法启动的解决", "LNMP单机高并发的简单优化", "服务器迁移，博客已无缝切换", "【升级包已上传】成功升级DCS黑鲨到1.02并汉化", "在Nginx中将http://zh30.com:443跳转到https://zh30.com:443", "php正则匹配中文汉字-正则表达式匹配中文", "树莓派安装homebridge小记", "Laravel5.4安装passport时遇到的一些问题", "yaf框架在nginx中的vhost配置", "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]", "Vue history模式编译后nginx无法访问的问题", "屏蔽nPlayer视频广告", "php 验证身份证号", "平安拼团80块的beatsx", "redis命令笔记", "乱码表，看懂常见编码乱码", "php hexdec超大数值的16进制转10进制", "Docker搜索或拉取镜像时提示timeout", "【更新】PC端微信(2.6.7.57)防撤回", "php基于sha1withRSA算法的签名和验签(pfx证书)", "C语言实现单链表的创建、元素添加删除等操作", "unoconv：在OpenOffice支持的任何文档格式之间进行转换", "初烧盲狙一条铁三角e40", "git-bash设置ssh心跳包防超时断开", "使用码云git的webhook实现生产环境代码的自动pull", "【HD】一个时代的结束-发现者号航天飞机与747的最后一次亲密接触", "可以在家里这样练:胸肌与肱三头肌锻炼", "聚焦钓鱼岛", "youtube上的神作-GTA4版江南Style", "简直笑出翔:央视直播口误集锦–第二季", "VirtualBox压缩vmdk、vagrant打包box一口气全对", "win10中vagrant报错Failed to create the host-only adapter", "navicat导入xlsx时提示无法打开文件", "【恶搞】加班广告语-加班，死一般的感觉", "一键安装BBR并解决重启时scsi_wait_scan not found", "2016rMBP登录后自动关机、帐户数据丢失", "注册谷歌时提示”此电话号码无法用于进行验证”的解决办法", "使用xdebug+webgrind分析php性能", "写了一个在Safari中图片热点map无效的bug", "查看你的AWS服务器已使用流量", "vscode+XDebug调试远程环境(虚拟机)上的PHP代码", "709元我上了斐讯K2P的车", "简单强大的php读取excel类：Spreadsheet_Excel_Reader", "13天6500公里打卡8座城", "python实现的发红包程序", "SublimeText3按ctrl+b执行python无反应", "天猫商品详情页视频的下载的思路", "ubuntu下cmake报错Could NOT find Boost", "大吉大利，晚上吃鸡吧", "python+selenium自动登录qq空间并下载相册", "mysql允许远程访问设置", "看到一半才发现这是模拟飞行，囧", "vagrant+ubuntu14.4+lnmp一键包运行laravel可能需要的步骤", "lnmp集成环境运行laravel报open_basedir restriction in effect的错误", "抓取摩拜单车车辆位置数据", "局域网环境下快速ssh到树莓派", "让TortoiseGit记住密码", "填坑解决homestead中serve添加多站点后无法访问", "谷歌chrome更新失败错误代码3的解决办法", "Laravel5使用qq邮箱smtp发邮件配置及测试", "wordpress边栏最近热门浏览排行", "swift3中提示框UIAlertController的使用", "树莓派上控制蜂鸣器模拟摩尔斯电码(电报效果)", "树莓派中使用gpiozero控制蜂鸣器", "双向链表的实现(头插尾插和删除、遍历)", "又是一个单链表的实现(头插法和尾插法)", "使用antiword读取word文档", "使用Python+Selenium模拟登录QQ空间", "博客更换bootstrap新主题", "博客启用全站https", "【精】摩托E6详细刷机教程", "树莓派3使用USB摄像头", "php实现的网页正文提取算法", "入手树莓派RaspberryPi 3小记", "js版贪吃蛇", "hao123万年历中的农历显示源码", "昨晚又搞了一晚上，博客增加了不少东西~现在还有点睡眠不足..", "安装YouCompleteMe时报cmake_cxx_compiler no found的解决", "PHP数独矩阵生成器", "python-DHT爬虫中路由表的实现", "博客服务器环境升级到PHP7.0", "windows中配置apache以cgi方式运行python", "python+selenium实现QQ群自动签到", "扩展sublimeText3的Tab自动补全功能", "centos+apache配置https(ssl)", "php的flush和ob_flush不起作用?", "阿里云下架512M主机并提供超低价升级", "Win7下IIS报503Service Unavailable错误的解决", "php输出xml(导出excel)数据过长时被截断", "mysql无符号整型自减运算时溢出的解决", "使用JS动态修改微信浏览器中的title", "【PHP】实现获取客户端的网卡mac物理地址", "CentOS/Fedora安装git1.9.0", "Python/PHP数字螺旋矩阵", "微信getLocation坐标偏移问题", "python抓取安居客小区数据"]
            };
        }
    };
</script>

<style lang="less" scoped>
    .sitemap_list {
        margin: 20px 0 50px;
    }

    .sitemap {
        text-align: left;

        .title {
            font-size: 22px;
            border-bottom: 1px solid #000;
        }

        li {
            list-style: disc;
            margin: 8px 0 0 45px;

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
