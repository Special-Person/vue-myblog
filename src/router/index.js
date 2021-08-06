import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
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
            path: "*",
            redirect: {name: "Home"}
        }
    ]
});
