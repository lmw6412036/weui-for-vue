/**
 * Created by Administrator on 2017/6/22 0022.
 */
export default  class {
  constructor(options){
    this.value=options.value
    let label="QWERTYUI欧珀莱空间和规范的撒自行车VB你们";
    let len=label.length;
    this.label=label.substr(Math.floor(Math.random()*len),4);
  }
}
