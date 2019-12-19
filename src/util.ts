import { card,poker} from "./types";

import { digit, color } from "./enums";

export function createPoker():poker{
    let poker:card []=[];
    const cardNumber=Object.values(digit);
    const cardColor=Object.values(color);
    for(let n of cardNumber){           //for of 遍历的是数组的值
        for(let c of cardColor){
            poker.push({
                number:n,
                color:c
            })
        }
    }
    return poker;
}

export function printPoker(poker:poker){
    for(let i=0;i<52;i++){
        let str=poker[i].number+poker[i].color;
        console.log(str)
    }
}