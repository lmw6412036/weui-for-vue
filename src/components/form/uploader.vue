<template>
    <div class="weui-cell">
        <div class="weui-cell__bd">
            <div class="weui-uploader">
                <div class="weui-uploader__hd">
                    <p class="weui-uploader__title">{{title}}</p>
                    <div class="weui-uploader__info">{{data.length}}{{total?"/"+total:""}}</div>
                </div>
                <div class="weui-uploader__bd">
                    <ul class="weui-uploader__files" id="uploaderFiles">
                        <slot></slot>
                    </ul>
                    <div class="weui-uploader__input-box">
                        <input @change="change($event)" class="weui-uploader__input" type="file" multiple="multiple" accept="*/*">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            data:Array,
            title:String,
            total:[String,Number]
        },
        data() {
            return {};
        },
        computed: {

        },
        components: {},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            change(e){
                this.$emit('uploader:change',e.currentTarget.files);
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
