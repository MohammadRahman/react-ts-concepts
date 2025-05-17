import { words } from "../data/worlde";

export function getWords(): Promise<string[]>{
   return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(words.length > 0){
                resolve(words)
            }else{
                reject(new Error("No words found."))
            }
        },1000)
   });    
}