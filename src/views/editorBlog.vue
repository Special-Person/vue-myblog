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
    export default {
        name: "editor",
        data() {
            return {
                editorContent: "",
                config: {
                    "标题": {
                        "command": "h",
                        "icon": "fa fa-header",
                        "title": "标题",
                        "popup": true,
                        "component": "headerList"
                    },
                    "加粗": {"command": "bold", "icon": "fa fa-bold", "title": "加粗"},
                    "斜体": {"command": "italic", "icon": "fa fa-italic", "title": "斜体"},
                    "字体": {
                        "command": "fontSize",
                        "icon": "fa fa-font",
                        "title": "字体",
                        "popup": true,
                        "component": "fontList"
                    },
                    "下划线": {"command": "underline", "icon": "fa fa-underline", "title": "下划线"},
                    "删除线": {"command": "strikethrough", "icon": "fa fa-strikethrough", "title": "删除线"},
                    "居左": {"command": "justifyLeft", "icon": "fa fa-align-left", "title": "居左"},
                    "居中": {"command": "justifyCenter", "icon": "fa fa-align-center", "title": "居中"},
                    "居右": {"command": "justifyRight", "icon": "fa fa-align-right", "title": "居右"},
                    "两侧": {"command": "justifyFull", "icon": "fa fa-align-justify", "title": "两侧"},
                    "无序列表": {"command": "InsertUnorderedList", "icon": "fa fa-list-ul", "title": "无序列表"},
                    "有序列表": {"command": "insertOrderedList", "icon": "fa fa-list-ol", "title": "有序列表"},
                    "上标": {"command": "superscript", "icon": "fa fa-superscript", "title": "上标"},
                    "下标": {"command": "subscript", "icon": "fa fa-subscript", "title": "下标"},
                    "表格": {
                        "command": "table",
                        "icon": "fa fa-table",
                        "title": "表格",
                        "popup": true,
                        "component": "tableBox"
                    },
                    "图片": {
                        "command": "img",
                        "icon": "fa fa-image",
                        "title": "图片",
                        "popup": true,
                        "component": "imageBox"
                    },
                    "擦除": {"command": "removeFormat", "icon": "fa fa-eraser", "title": "擦除"},
                    "撤销": {"command": "undo", "icon": "fa fa-undo", "title": "撤销"},
                    "重做": {"command": "redo", "icon": "fa fa-repeat", "title": "重做"}
                },
                titleVal: "",
                tagsVal: ""
            };
        },
        created() {

        },
        methods: {
            sendContent() {
                this.$axios.post(`/api/editBlog?title=${this.titleVal}&tags=${this.tagsVal}`, this.editorContent)
                    .then(res => res.status === 200 && alert(res.data.msg));
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
