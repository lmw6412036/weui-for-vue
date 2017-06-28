import Vue from "vue";
import Router from "vue-router";
import Index from "../pages/index.vue";
import DatePicker from "../pages/form/date-picker.vue";
import NavSelect from "../pages/nav/select.vue";
import PlainButton from "../pages/form/plain-button.vue";
import Gallery from "../pages/gallery.vue";
import ActionSheet from "../pages/action-sheet.vue";
import Uploader from "../pages/form/uploader.vue";
import Scroll from "../pages/scroll/scroll.vue";
import ScrollView from "../pages/scroll/scroll-view.vue"
import Code from "../pages/form/code.vue"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/form/datepicker',
            component: DatePicker
        },
        {
            path: '/form/plainbutton',
            component: PlainButton
        },
        {
            path: '/form/uploader',
            component: Uploader
        },
        {
            path: "/form/code",
            component: Code
        },
        {
            path: "/nav/select",
            component: NavSelect
        },
        {
            path: "/gallery",
            component: Gallery
        },
        {
            path: "/actionsheet",
            component: ActionSheet
        },
        {
            path: "/scroll",
            component: Scroll
        },
        {
            path: "/scroll/view",
            component: ScrollView
        }
    ]
})
