<template>
    <div class="nav">
        <ul>
            <li>
                <nav-select @nav-select:show="getCurrentId" :currentId="currentId" :data="data1" id="dept" top="45">
                    <span>科室</span>
                </nav-select>
            </li>
            <li>
                <nav-select @nav-select:show="getCurrentId" :currentId="currentId" :data="data2" id="type" top="45">
                    <span>问诊类型</span>
                </nav-select>
            </li>
            <li>
                <nav-select @nav-select:show="getCurrentId" :currentId="currentId" :data="data1" id="sort" top="45">
                    <span>排序</span>
                </nav-select>
            </li>
        </ul>
    </div>
</template>

<script>
    import Dept from "../../data/dept"
    import NavSelect from "../../components/nav/nav-select.vue"
    export default {
        data() {
            let arr = [1, 2, 3, 4, 5];
            let data1 = arr.map((item) => {
                return Object.assign({}, new Dept(item));
            })
            let data2 = data1.map((item) => {
                return Object.assign({}, item, {
                    children: [9, 8, 7].map((i) => {
                        return new Dept(i);
                    })
                })
            })
            console.log(data1, data2)
            return {
                data1: [data1],
                data2: [data2],
                currentId: ""
            };
        },
        computed: {},
        components: {NavSelect},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            getCurrentId(id){
                this.currentId = id;
            }
        }
    };
</script>

<style scoped lang="scss">
    ul {
        display: flex;
        li {
            height: 45px;
            list-style: none;
            width: (100% / 3);
            line-height: 45px;
            text-align: center;
            background-color: white;
        }
    }
</style>
