<template>
    <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
            <label class="weui-label">{{label}}</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" :value="value" @input="update($event)" type="text" :placeholder="placeholder">
        </div>
        <div class="weui-cell__ft">
            <button @click="click()" :class="{'countdown':countdown}" class="weui-vcode-btn">{{showtext}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            defaultTime: [Number, String],
            text: {
                type: String,
                default: "获取验证码"
            },
            mobile: [String, Number],
            value: [String, Number],
            countdown: Boolean
        },
        data() {
            return {
                time: parseInt(this.defaultTime),
                showtext: this.text,
                placeholder: "请输入" + (this.label ? this.label : "")
            };
        },
        computed: {},
        components: {},
        mounted() {
            this._countdown(this.countdown);
        },
        beforeDestroy() {

        },
        methods: {
            _countdown(value){
                if (value) {
                    this.showtext = this.time + "s后重发";
                    if (this.time > 0) {
                        this.time--;
                        setTimeout(() => {
                            this._countdown(value);
                        }, 1000)
                    } else {
                        this.$emit('code:countdownend', '')
                        this.showtext = this.text;
                        this.time = this.defaultTime;
                    }
                }
            },
            update(e){
                this.$emit('input', e.target.value);
            },
            click(){
                if (!this.mobile) {
                    this.$emit('code:error', "手机不能为空")
                    return;
                }
                if (!/1[3456789][\d]{9}/g.test(this.mobile)) {
                    this.$emit('code:error', "手机格式不正确")
                    return;
                }
                this.$emit('code:ok', "ok")
            }
        },
        watch: {
            countdown(value){
                this._countdown(value);
            }
        }
    };
</script>

<style scoped lang="scss">
    .weui-vcode-btn.countdown {
        color: #aaa;
    }
</style>
