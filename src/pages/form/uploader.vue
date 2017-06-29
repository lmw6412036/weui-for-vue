<template>
  <div>
    <div class="weui-cells weui-cells_form">
      <uploader @uploader:change="change" :data="pics" title="图片上传" total="9">
        <li v-for="item in pics" :class="{'weui-uploader__file_status':item.state&&item.state==3}"
            class="weui-uploader__file" :style="{'backgroundImage':`url(${item.url})`}">
          <div class="weui-uploader__file-content" v-if="item.progress">{{item.progress}}</div>
        </li>
      </uploader>
    </div>
  </div>
</template>

<script>
  import {queue} from "d3-queue"
  import Uploader from "../../components/form/uploader.vue"
  import Upload from "../../lib/uploader"
  export default {
    data() {
      let pic = "https://img10.360buyimg.com/mobilecms/s110x110_jfs/t5752/112/4073155781/92761/838d5cf8/59476302Nb512be6c.jpg";
      let pics = [1, 2, 3, 4, 5].map((item) => {
        return Object.assign({
          url: pic
        });
      })
      return {
        pics: pics,
        queueFiles: []
      };
    },
    computed: {},
    components: {Uploader},
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      _demo(value, time, cb){
        setTimeout(() => {
          console.log("queue--", value);
          cb(null, value);
        }, time)
      },
      change(filelist){
        Upload(filelist, {
          server: "//nethos.diandianys.com/api/app",
          fileVal: "file",
          formData: {name: "lmw"},
          clearQueue: false,
          progress: (res, file) => {
            this.pics.forEach((pic, index) => {
              if (pic.fileId && pic.fileId == file.fileId) {
                let f = Object.assign({}, file, {
                  progress: (res.loaded / res.total * 100).toFixed(2) + "%"
                })
                this.pics.splice(index, 1, f);
              }
            })
          },
          queued: (file) => {
            //console.log("add file", file);
            //this.queueFiles.push(file);
            this.pics.push(file);
          },
          success: (res, file) => {
            this.pics.forEach((pic, index) => {
              if (pic.fileId && pic.fileId == file.fileId) {
                let f = Object.assign({}, file, {
                  //修改url为上传后的返回结果
                })
                this.pics.splice(index, 1, f);
              }
            })
          },
          complete: (res) => {
            //console.log("complete", res);
            //this.queueFiles.splice(0, this.queueFiles.length);
          },
          error: (res) => {
            //console.log(res);
          }
        });
      }
    },
    watch: {}
  };
</script>

<style scoped lang="scss">

</style>
