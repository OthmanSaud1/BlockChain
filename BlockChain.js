import Block from "./Block.js";

class BlockChain{
    chain;
    constructor(){
        this.chain = [];
        this.init();
    }
    init(){
        let block = new Block(0,"Genesis","null",0,0,Date.now());
        if(this.chain.length() <= 0);{
        this.chain.push(block);
        console.log(this.chain);
        }
    }
}
export default BlockChain;