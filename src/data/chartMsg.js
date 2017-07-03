/**
 * Created by Administrator on 2017/7/3 0003.
 */
import timeFormat from "lmw-time-format";
export default class {
  constructor(index) {
    let msgtType;
    let str = "破医一台热武器爱上对方过后就哭了美女吧v从现在";
    let random = Math.floor(Math.random() * str.length)
    let msgContent = str.substr(random);
    if (random % 2 == 0) {
      msgtType = "self"
    } else {
      msgtType = "other"
    }
    let msgTime = new Date().getTime() + Math.round(Math.random() * 1000 * 3600 * 24 * 30);
    this.msgTime = timeFormat(msgTime, "%Y-%m-%d");
    this.msgtType = msgtType;
    this.msgContent = msgContent;
    let ava = ['http://img3.imgtn.bdimg.com/it/u=875590337,2093017642&fm=26&gp=0.jpg', "http://img2.imgtn.bdimg.com/it/u=1986520047,2418393783&fm=26&gp=0.jpg","http://img5.imgtn.bdimg.com/it/u=166068968,3893509509&fm=26&gp=0.jpg"]
    this.msgAva = ava[Math.floor(Math.random() * ava.length)];
  }
}
