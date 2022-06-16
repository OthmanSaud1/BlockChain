import { sha256 } from "crypto.js";
class Block{
    constructor(hash, data, prev, hieght, nonce, timeStamp){
        this.hash = this.calculate();
        this.data = data;
        this.prev = prev;
        this.hieght = hieght;
        this.nonce = 0;
        this.timeStamp = timeStamp;

    }
    calculate(){
       return sha256(
           this.hieght + this.timeStamp + this.data + this.prev
       ).toString();
    }
}
export default Block;