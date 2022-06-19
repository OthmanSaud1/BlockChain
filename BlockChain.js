import Block from "./Block.js";
import { sha256 } from "crypto.js";
class BlockChain{
    chain
    
    constructor(){
        this.chain = []
        this.init();
        this.validateBlocks();

    }
    init(data){
        if(this.chain.length == 0){
        let block = new Block(0,"Genesis","null",this.chain.length,0,Date.now());
        this.chain.push(block);
        console.log(this.chain);
    }
    for(let i =1; i< 10 ; i ++){
        let block = new Block("","",this.chain[i-1].hash,this.chain.length,0,Date.now());
        this.chain.push(block);
        console.log(this.chain[i]);
        
            } 
        
    
    
    }

    validateBlocks(){
        let flag = true;
        for(let i = 1; i<this.chain.length; i++){
            if(this.chain[i].prev != this.chain[i-1].hash)
            flag = false;
        }
        console.log(flag);
        
        for(let i = 1; i<this.chain.length; i++){
          if (!(sha256(this.chain[i].data + this.chain[i].nonce + this.chain[i].timeStamp).toString() == this.chain[i].hash)){
            flag = false;
          }

         }
            console.log(flag);
        }
    
    // validateBlocksHelper(){
    //     if(!(sha256(arguments[0] + arguments[1] + arguments[2]).toString() == arguments[3])){
    //     return false;
    //     }
    //     else return true
    // }


    
}
new BlockChain();
export default BlockChain;