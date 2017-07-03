<template>
  <div class="footbox" :class="{'showplus':showplus}">
    <div class="sendbox">
      <div class="plus" @click="show('plus')">+</div>
      <div class="input">
        <div ref="textarea" contenteditable="true" class="textarea" @input="change">{{content}}</div>
      </div>
      <div class="send">发送</div>
    </div>
    <div class="plusbox" v-show="showplus">
      kddkkdkdkdkddkkdkdkdkd
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: "",
        showplus: false
      };
    },
    computed: {},
    components: {},
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      show(type){
        if (type == "plus") {
          this.showplus = !this.showplus;
          if (this.showplus) {
            this.$emit("sendbox:heightchange", 45 + 80);
          }else{
            this.$emit("sendbox:heightchange", 45);
          }
        }
      },
      change(e){
        let dom = e.target;
        let h = dom.clientHeight, hhh = dom.scrollHeight;
        this.content = dom.innerHTML;
        if (hhh < 60) {
          this.$emit("sendbox:heightchange", hhh + 2 + 15);
        }

      }
    },
    watch: {}
  };
</script>

<style scoped lang="scss">
  $w1: 45px;
  .sendbox {
    position: relative;
    display: flex;
    align-items: center;
    .plus {
      width: $w1;
      flex: 0 0 auto;
    }
    .input {
      flex: 1 1 auto;
      padding-top: 8px;
      padding-bottom: 7px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .textarea {
        flex: 1 1 auto;
        border: 1px solid #bbb;
        width: 90%;
        max-height: 60px;
        overflow: scroll;
        line-height: 14px;
        padding: 5px;
      }
    }
    .send {
      width: $w1;
      flex: 0 0 auto;
    }
  }
</style>
