<template>
    <div class="weui-cell weui-cell_select">
        <div class="weui-cell__hd"><label :for="id" class="weui-label">{{label}}</label></div>
        <div class="weui-cell__bd">
            <input :value="value" readonly class="weui-input" type="text" :id="id"
                   @click="click()">
        </div>
    </div>
</template>

<script>
    import weui from "weui.js";
    import {timeFormat} from "d3-time-format"
    import DataType from '../../lib/datatype'
    export default {
        props: {
            label: String,
            start: [Number, String, Date],
            end: [Number, String, Date],
            cron: String,
            value: [String, Array]
        },
        data() {
            return {
                options: {
                    onChange: this._change,
                    onConfirm: this._confirm
                }
            };
        },
        computed: {
            id(){
                return "id" + new Date().getTime();
            }
        },
        components: {},
        created() {
            this._getDefaultOptions()
        },
        beforeDestroy() {

        },
        methods: {
            _setValue(res){
                let arr = [];
                res.forEach((item, index) => {
                    arr.push(item.value);
                })
                arr[1]--;
                let format = timeFormat("%Y-%m-%d");
                //console.log('value',format(new Date(...arr)));
                let val = format(new Date(...arr));
                this.$set(this.options, 'defaultValue', val.split('-'));
                return val;
            },
            _getDefaultOptions(){
                if (!this.start) {
                    this.$set(this.options, 'start', 1900)
                } else {
                    this.$set(this.options, 'start', this.start)
                }
                if (!this.end) {
                    this.$set(this.options, 'end', new Date().getFullYear() + 50)
                } else {
                    this.$set(this.options, 'end', this.end)
                }
                if (!this.value) {
                    let format = timeFormat("%Y-%m-%d")
                    this.$set(this.options, 'defaultValue', format(new Date()).split("-"))
                } else if(DataType(this.value)=="String"){
                    this.$set(this.options, 'defaultValue', this.value.split("-"))
                }else{
                    this.$set(this.options, 'defaultValue', this.value)
                }
            },
            _change(res){
                console.log("change", res);
                let val = this._setValue(res);
                let r = res.concat([val]);
                this.$emit('select-picker:change', r)
                this.$emit('input',val)
            },
            _confirm(res){
                console.log("sonfirm", res);
                let val = this._setValue(res);
                let r = res.concat([val]);
                this.$emit('select-picker:confirm', r)
                this.$emit('input',val)
            },
            click(){
                weui.datePicker(this.options);
            }
        }
    };
</script>

<style scoped lang="scss">
    .weui-cell_select {
        padding: 10px 15px;
    }
</style>
