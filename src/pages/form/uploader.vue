<template>
  <div>
    <div class="weui-cells weui-cells_form">
      <uploader @uploader:change="change" :data="pics" title="图片上传" total="9">
        <li v-for="item in pics" class="weui-uploader__file" :style="{'backgroundImage':`url(${item.url})`}"></li>
      </uploader>
    </div>
  </div>
</template>

<script>
  import {queue} from "d3-queue"
  import Uploader from "../../components/form/uploader.vue"
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
        files: []
      };
    },
    computed: {},
    components: {Uploader},
    mounted() {
      let q = queue(1);
      let that = this;
      [10, 9, 8, 7, 6, 1, 2, 3, 4, 5].forEach((item) => {
        (function (i) {
          q.defer(that._demo, i, i * 1000);
        })(item);
      })
      q.await((...res) => {
        console.log(res);
      })
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

      }
    },
    watch: {}
  };
</script>

<style scoped lang="scss">

</style>
