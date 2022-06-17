import Block from "./Block.js";
import { sha256 } from "crypto.js";
class BlockChain{
    chain
    
    constructor(){
        this.chain = []
        this.init();

    }
    init(){
        let block = new Block(0,"Genesis","null",0,0,Date.now());
        if(this.chain.length == 0){
        this.chain.push(block);
        console.log(this.chain);
    }
    
}


    
}
new BlockChain();
export default BlockChain;