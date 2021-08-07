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
    }),
    /**
     * 请求单条文章
     * @param params
     */
    queryBlog: (params = {}) => axios({
        url: "/api/queryBlog",
        method: "get",
        params
    }),
    /**
     * 请求评论验证码
     * @param params
     */
    queryRandomCode: (params = {}) => axios({
        url: "/api/queryRandomCode",
        method: "get",
        params
    }),
    /**
     * 根据博客id请求区间评论
     * @param params
     * @returns {AxiosPromise}
     */
    queryCommentsByBlodId: (params = {}) => axios({
        url: "/api/queryCommentsByBlodId",
        method: "get",
        params
    }),
    /**
     * 请求博客id下总条数评论
     * @param params
     * @returns {AxiosPromise}
     */
    queryCommentsCountByBlodId: (params = {}) => axios({
        url: "/api/queryCommentsCountByBlodId",
        method: "get",
        params
    }),
    /**
     * 请求所有的博客文章
     * @param params
     * @returns {AxiosPromise}
     */
    queryAllBlog: (params = {}) => axios({
        url: "/api/queryAllBlog",
        method: "get",
        params
    }),
    /**
     * 请求所有的标签
     * @param params
     * @returns {AxiosPromise}
     */
    queryAllTag: (params = {}) => axios({
        url: "/api/queryAllTag",
        method: "get",
        params
    }),
    /**
     * 根据tag名称 查询 tagId
     * 根据tagId 查询 博客Id
     * 根据博客Id 返回所有的文章
     * @param params
     * @returns {AxiosPromise}
     */
    queryTagByTags: (params = {}) => axios({
        url: "/api/queryTagByTags",
        method: "get",
        params
    }),
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
    }),
    /**
     * 发送评论
     * @param editorContent 发布内容
     * @param params 用于给Url拼接更多的参数
     */
    addComment: (editorContent, params = {}) => axios({
        url: "/api/addComment",
        data: editorContent,
        method: "post",
        params
    })
};
