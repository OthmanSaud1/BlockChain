import { sha256 } from "crypto.js";
class Block{
    blockName = "Othman";
    constructor(hash, data, prev, hieght, nonce, timeStamp){
        this.hash = this.proofOfWork().substring(0,64);
        this.data = "temp";
        this.prev = prev;
        this.hieght = hieght;
        this.nonce = parseInt(this.proofOfWork().substring(77));
        this.timeStamp = parseInt(this.proofOfWork().substring(64,77));

    }
    calculate(){
       return sha256(
           this.hieght + this.timeStamp + this.data + this.prev + this.nonce
       ).toString();
    }
    proofOfWork(){
        let data = "temp";
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