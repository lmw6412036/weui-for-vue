/**
 * Created by MBENBEN on 2017/6/24.
 */
export default class {
    constructor(value) {
        this.value = value;
        this._init(value);
    }

    _init(value) {
        let str = "QWERTYUI欧珀莱看脚后跟范德萨自行车VB那吗们那边VC洗澡了看就好官方的撒泼个u用太热气";
        this.label = str.substr(Math.floor(Math.random() * str.length), 4);

    }
}