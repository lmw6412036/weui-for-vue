<template>
  <div>
    <div class="weui-cells__title">{{label}}</div>
    <div class="weui-cells weui-cells_radio">
      <label v-for="item in data" class="weui-cell weui-check__label" :for="name+item.value">
        <div class="weui-cell__bd">
          <p>{{item.text}}</p>
        </div>
        <div class="weui-cell__ft">
          <input type="radio"  class="weui-check" v-model="val" :value="item.value" :name="name" :id="name+item.value">
          <span class="weui-icon-checked"></span>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      data: [Array],
      name:String,
      value:[Number,String]
    },
    data() {
      return {
          val:this.value
      };
    },
    computed: {},
    components: {},
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {},
    watch:{
        val(value){
            this.$emit("input",value);
        }
    }
  };
</script>

<style scoped lang="scss">

</style>
