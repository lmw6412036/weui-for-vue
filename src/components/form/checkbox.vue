<template>
  <div class="">
    <div class="weui-cells__title">{{label}}</div>
    <div class="weui-cells weui-cells_checkbox">
      <label class="weui-cell weui-check__label"
             v-for="item in data"
             :for="name+item.value">
        <div class="weui-cell__hd">
          <input type="checkbox" class="weui-check"
                 v-model="val"
                 :value="item.value"
                 :name="name"
                 :id="name+item.value">
          <i class="weui-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p>{{item.text}}</p>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      name: String,
      value: [Array],
      data: [Array]
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
