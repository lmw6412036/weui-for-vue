/**
 * Created by Administrator on 2017/6/22 0022.
 */
let _toString=Object.prototype.toString
export default function (value) {
  return _toString.call(value).replace(/[\[\]\s]|object/g,'')
}
