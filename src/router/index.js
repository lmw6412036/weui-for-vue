import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index.vue"
import DatePicker from "../pages/form/date-picker.vue"

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
        }
    ]
})
