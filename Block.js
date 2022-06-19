import { sha256 } from "crypto.js";
class Block{
    blockName = "Othman";
    constructor(hash, data = "temp", prev, hieght, nonce, timeStamp){
        let concat = this.proofOfWork();
        this.hash = concat.substring(0,64);
        this.data = data;
        this.prev = prev;
        this.hieght = hieght;
        this.nonce = parseInt(concat.substring(77));
        this.timeStamp = parseInt(concat.substring(64,77));

    }
    calculate(){
       return sha256(
           this.hieght + this.timeStamp + this.data + this.prev + this.nonce
       ).toString();
    }
    proofOfWork(){
        let data = "";
        let nonce = 0;
        let numOfGuesses = 0;
        let difficulty = 1;
        let timeStamp = Date.now()
        
        for (let i = 0; i < 10000000; i++){   
        let magicHash = sha256(
            data + nonce + timeStamp
        ).toString();
            if (magicHash.substring(0, difficulty) == "".padStart(difficulty, "0")){
                console.log("magic hash : " + magicHash)
                console.log("we found the hash with "+numOfGuesses+" guesses")
                return magicHash + timeStamp + nonce;
            }
        numOfGuesses++; 
        nonce++;
        }
    }
}

export default Block;