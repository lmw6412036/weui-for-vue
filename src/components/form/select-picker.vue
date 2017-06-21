<template>
  <div class="weui-cell weui-cell_select">
    <div class="weui-cell__hd"><label :for="id" class="weui-label">{{label}}</label></div>
    <div class="weui-cell__bd">
      <input :value="showvalue" readonly class="weui-input" type="text" :id="id" @click="click()">
    </div>
  </div>
</template>

<script>
  import weui from "weui.js";
  export default {
    props: {
      label: String,
      value: {
        type: [String, Number, Array]
      },
      data: {
        type: Array
      }
    },
    data() {
      return {
        showvalue: ""
      };
    },
    computed: {
      id(){
        return "id" + new Date().getTime();
      }
    },
    components: {},
    mounted() {
      this._getDefaultValue()
    },
    beforeDestroy() {

    },
    methods: {
      _getDefaultValue(){
        let val = "";
        switch (this.value.constructor) {
          case Array:
            val = this.value;
            break;
          default :
            val = [this.value]
        }
        this._setLabel(val);
        return val;
      },
      _setLabel(value){
        this.showvalue = "";
        console.log('value', value);
        value.forEach((item, index) => {
          this.data[index].forEach((o, i) => {
            if (o.value == item || o.value == item.value) {
              this.showvalue += `-${o.label}`;
            }
          })
        });
        this.showvalue = this.showvalue.substr(1);
      },
      _change(res){
        console.log("change", res);
        this._setLabel(res);
        this.$emit('select-picker:change', res)
      },
      _confirm(res){
        console.log("sonfirm", res);
        this._setLabel(res);
        this.$emit('select-picker:confirm', res)
      },
      click(){
        let options = {
          onChange: this._change,
          onConfirm: this._confirm
        };
        options.defaultValue = this._getDefaultValue();
        console.log(options);
        weui.picker(...this.data, options);
      }
    }
  };
</script>

<style scoped lang="scss">
  .weui-cell_select {
    padding: 10px 15px;
  }
</style>
