/**
 * Created by Administrator on 2017/6/6 0006.
 */
import {withParams,ref,req,regex} from  "vuelidate/lib/validators/common";
/*简单验证*/
/*export default (value)=>{
  return true
}*/
/*复杂验证*/
export default (regex)=>withParams({type:"regex",regex:regex},value=>{
  console.log(value,regex);
  return true;
});
