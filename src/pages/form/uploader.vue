<template>
    <div>
        <div class="weui-cells weui-cells_form">
            <uploader @uploader:change="change" :data="pics" title="图片上传" total="9"></uploader>
        </div>
    </div>
</template>

<script>
    import Uploader from "../../components/form/uploader.vue"
    export default {
        data() {
            let pic = "https://img10.360buyimg.com/mobilecms/s110x110_jfs/t5752/112/4073155781/92761/838d5cf8/59476302Nb512be6c.jpg";
            let pics = [1, 2, 3, 4, 5].map((item) => {
                return pic;
            })
            return {
                pics: pics,
                files: []
            };
        },
        computed: {},
        components: {Uploader},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            _addQueue(file){
                this.files.push({
                    file: file,
                    state: 2
                })
            },
            _queue(){
                for (let i in this.files) {
                    let file = this.files[i];
                    if (file && file.state == 2) {
                        this._base64(file.file, i, this._queue);
                        break;
                    }
                }
            },
            _base64(file, index, fn){
                let fr = new FileReader();
                fr.onload = () => {
                    this.$set(this.files[index], 'base64', fr.result)
                    this.$set(this.files[index], 'state', 3)
                    fn();
                };
                fr.readAsDataURL(file);
            },
            change(filelist){
                let i = 0;
                let fl = filelist.length;
                while (i < fl) {
                    let file = filelist[i];
                    this._addQueue(file);
                    i++;
                }
                this._queue();
            }
        },
        watch: {
            files(value){
                let newv = value.filter((item) => {
                    if (item.state == 3) {
                        return true;
                    }
                })
                if (newv.length == value.length) {
                    value.forEach((item) => {
                        this.pics.push(item.base64)
                    })
                }
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
