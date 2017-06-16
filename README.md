# weui-for-vue

> css依赖weui(1.0+)
> 继续开发中...

##安装
```bash
npm i -D weui-for-vue
```

## 使用方式
``` bash

引入css
import "weui"

###完全加载
import WeuiForVue from "weui-for-vue"
components:{...WeuiForVue}

###部分引入
import {Msg} from "weui-for-vue"
components:{Msg}

###单独引入，减少包的大小
import Msg from 'weui-for-vue/src/components/msg.vue'
components:{Msg}

```
[文档]() 
