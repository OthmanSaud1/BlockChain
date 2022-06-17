import { sha256 } from "crypto.js";
class Block{
    blockName = "Othman";
    constructor(hash, data, prev, hieght, nonce, timeStamp){
        this.hash = this.proofOfWork();
        this.data = data;
        this.prev = prev;
        this.hieght = hieght;
        this.nonce = 0;
        this.timeStamp = Date.now();

    }
    calculate(){
       return sha256(
           this.hieght + this.timeStamp + this.data + this.prev + this.nonce
       ).toString();
    }
    proofOfWork(){
        let block = "OthCrypto";
        let nonce = 0;
        let numOfGuesses = 0;
        let difficulty = 2;
        
        for (let i = 0; i < 10000000; i++){   
        let magicHash = sha256(
            block + nonce + Date.now()
        ).toString();
            console.log(magicHash);
            if (magicHash.substring(0, difficulty) == "".padStart(difficulty, "0")){
                console.log("magic hash : " + magicHash)
                console.log("we found the hash with "+numOfGuesses+" guesses")
                return
            }
        numOfGuesses++; 
        nonce++;
        }
    }
}

export default Block;