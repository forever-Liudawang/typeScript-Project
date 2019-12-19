type color="♥"|"♠"|"♦"|"♣"
type card={
    number:number,
    color:color
}
type poker=card [];
function createPoker():poker{
    let poker:card []=[];
    for(let i=1;i<=13;i++){
        poker.push({
            number:i,
            color:"♠",
        })
        poker.push({
            number:i,
            color:"♣",
        })
        poker.push({
            number:i,
            color:"♥",
        })
        poker.push({
            number:i,
            color:"♦",
        })
    }
    return poker;
}

function printPoker(poker:poker){
    for(let i=0;i<52;i++){
        let str=poker[i].number+poker[i].color;
        console.log(str)
    }
}
const poker=createPoker();
printPoker(poker)