<template>
    <div class="editor">
        <h1>发布文章</h1>
        <p>
            <input type="text" name="title" v-model="titleVal" placeholder="请输入标题">
            <input type="text" name="tag" v-model="tagsVal" placeholder="请输入标签，用逗号隔开">
            <input type="submit" name="send" @click="sendContent" value="发布">
        </p>
        <mt-editor
                style="box-sizing: border-box;"
                height="100px"
                width="100%"
                v-model="editorContent"
                :uploadMethod="uploadMethod"
        />
    </div>
</template>

<script>
    import {post} from "../api";

    export default {
        name: "editor",
        data() {
            return {
                editorContent: "",
                titleVal: "",
                tagsVal: ""
            };
        },
        created() {

        },
        methods: {
            sendContent() {
                post.editBlog(this.editorContent, {
                    title: this.titleVal,
                    tags: this.tagsVal
                }).then(res => res.status === "success" && alert(res.msg));
            },
            /**
             * @description 上传图片函数，在该函数内完成图片的上传操作
             * @param
             *   params参数：该参数里包含了要上传的图片,由富文本调用uploadMethod方法时传递过来
             *     {fd:fd}
             */
            uploadMethod(params) {
                // 1 获取需要上传的图片formdata
                let fd = params.fd;
                // 2 拼接除了文件之外，接口需要的参数,如果没有则不需要再拼接，以下是例子
                fd.append("username", "zmt");
                // 3.调用真实的图片上传接口，由于现在大部分接口都是promise封装的，我这里就用一个Promise来做示意
                return new Promise((resolve) => {
                    /*
                      4. 将图片数据取出，组成以下格式，传给
                      {
                        imgURL: '图片地址'
                      }
                    */
                    resolve({
                        imgURL: "图片地址"
                    });
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .editor {
        & > p {
            text-align: left;
            margin: 10px 0;

            input {
                border-radius: 5px;
                border: 1px solid #ccc;
                background: #fff;
                padding: 6px 12px;
                outline: none;
                height: 34px;
                box-sizing: border-box;

                &:focus {
                    border-color: var(--size-color-hover);
                }


                &[name="title"] {
                    width: 33%;
                    margin-right: 15px;
                }

                &[name="tag"] {
                    width: 57%;
                }

                &[name="send"] {
                    margin-left: 7px;
                    margin-top: 10px;
                    cursor: pointer;

                    &:hover {
                        color: var(--size-color-hover);
                        border-color: var(--size-color-hover);
                    }
                }
            }

        }
    }
</style>
