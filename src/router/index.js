import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index.vue"
import DatePicker from "../pages/form/date-picker.vue"
import NavSelect from "../pages/nav/select.vue"
import PlainButton from "../pages/form/plain-button.vue"

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
            path: "/nav/select",
            component: NavSelect
        }

    ]
})
