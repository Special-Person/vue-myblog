import axios from "./request";

export const get = {
    /**
     * 请求每日一句
     * @param params 用于给Url拼接更多的参数
     */
    queryEveryDay: (params = {}) => axios({
        url: "/api/queryEveryDay",
        method: "get",
        params
    }),
    /**
     * 请求文章
     * @param params 用于给Url拼接更多的参数
     */
    queryBlogByPage: (params = {}) => axios({
        url: `/api/queryBlogByPage`,
        method: "get",
        params
    }),
    /**
     * 请求文章总数
     * @param params 用于给Url拼接更多的参数
     */
    queryBlogPageTotalCount: (params = {}) => axios({
        url: "/api/queryBlogPageTotalCount",
        method: "get",
        params
    })
};

export const post = {
    /**
     * 发布每日一句
     * @param editorContent 发布内容
     * @param params 用于给Url拼接更多的参数
     */
    editEveryDay: (editorContent, params = {}) => axios({
        url: "/api/editEveryDay",
        data: editorContent,
        params,
        method: "post"
    }),
    /**
     * 发布博客
     * @param editorContent 发布内容
     * @param params 用于给Url拼接更多的参数
     */
    editBlog: (editorContent, params = {}) => axios({
        url: `/api/editBlog`,
        data: editorContent,
        params,
        method: "post"
    })
};
