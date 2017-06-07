/**
 * Created by Administrator on 2017/5/31 0031.
 */
let argv = process.argv;
let params = argv[argv.length - 1].split(":");
let fs = require('fs');
let path = require('path');

if (params.length > 1) {
  /*
   * 根据命令行参数自动生成vue文件
   * node tool.js --vue:[vue路径][:路由]
   * eg:node tool.js --vue:components/demo
   * eg:node tool.js --vue:pages/login/login:/login
   * */
  if (params[0].indexOf('vue') >= 0) {
    let file = path.join(__dirname, './src', params[1] + ".vue");
    let dir = path.dirname(file);
    try {
      fs.statSync(dir);
      console.log(dir + "已存在");
    } catch (error) {
      fs.mkdirSync(dir);
    }
    let tpl = path.join(__dirname, "./src/lib/templete/tpl.vue");
    let tplContent = fs.readFileSync(tpl, "utf8");
    try {
      fs.writeFileSync(file, tplContent, {flag: "wx"});
      if (params[2]) {
        let component = (path.relative(path.join(__dirname, './src/router/'), file));
        let routerjs = fs.readFileSync(path.join(__dirname, './src/router/index.js'), "utf8");
        routerjs = routerjs.replace(/\[([\s\S]+)\]/g, (m, p1) => {
          return "[" + p1 + "," + "{\n" +
            "path: '" + params[2] + "',\n" +
            "component: resolve =>{\n" +
            "require(['" + component.replace(/\\/g, '/') + "'], resolve)\n" +
            "}\n" +
            "}\n" +
            "]";
        });
        fs.writeFileSync(path.join(__dirname, './src/router/index.js'), routerjs);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}
