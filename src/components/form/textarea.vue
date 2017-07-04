<template>
  <div class="">
    <div class="weui-cells__title">{{label}}</div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <textarea :value="value" @input="input" class="weui-textarea" :placeholder="placeholder" rows="3"></textarea>
          <div class="weui-textarea-counter"><span>{{length}}</span>/{{total}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      total: [Number, String],
      placeholder: String,
      label: String,
      value: String
    },
    data() {
      return {};
    },
    computed: {
      length(){
        return this.value.length;
      }
    },
    components: {},
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      input(e){
        let dom = e.target;
        if (this.length > 100) {
          this.$emit('textarea:error', "too long");
        }
        dom.value = dom.value.substr(0, 100);
        this.$emit('input', dom.value.substr(0, 100));
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
