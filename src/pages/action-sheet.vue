<template>
    <div>
        <a @click="click()">显示</a>
        <action-sheet @action-sheet:hide="show=false" :show="show" :menus="menus"></action-sheet>
    </div>
</template>

<script>
    import ActionSheet from "../components/action-sheet.vue"
    export default {
        data() {
            return {
                show: false,
                menus:["删除","编辑","添加","查询"]
            };
        },
        computed: {},
        components: {ActionSheet},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            click(){
                this.show = true;
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
