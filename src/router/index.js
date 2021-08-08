import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    linkExactActiveClass: "router_active",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/sitemap",
            name: "Sitemap",
            component: () => import("@/views/Sitemap.vue")
        },
        {
            path: "/about",
            name: "About",
            component: () => import("@/views/About.vue")
        },
        {
            path: "/guestbook",
            name: "GuestBook",
            component: () => import("@/views/Guestbook.vue")
        },
        {
            path: "/editorBlog",
            name: "editorBlog",
            component: () => import("@/views/editorBlog.vue")
        },
        {
            path: "/editorEveryDay",
            name: "editorEveryDay",
            component: () => import("@/views/editorEveryDay.vue")
        },
        {
            path: "/blogDetail/:id",
            name: "blogDetail",
            component: () => import("@/views/blogDetail.vue")
        },
        {
            path: "/tag/:id",
            name: "tag",
            component: () => import("@/views/tag.vue")
        },
        {
            path: "/search/:id",
            name: "search",
            component: () => import("@/views/search.vue")
        },
        {
            path: "*",
            redirect: {name: "Home"}
        }
    ],
});
export default router;
