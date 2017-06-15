<template>
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label" v-if="label">{{label}}</label></div>
    <div class="weui-cell__bd">
      <input ref="input" :value="value" @input="update($event)" class="weui-input" :type="type" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      type: {
        type: String,
        default: "text"
      },
      placeholder: String,
      value: [String, Number, Boolean]
    },
    data() {
      return {};
    },
    computed: {},
    components: {},
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
      update(e){
        let v=e.target.value;
        this.$emit("input",v);
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
