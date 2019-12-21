enum color{
    heart="♥",
    black="♠",
    meihua="♣",
    fk="♦"
}

interface card{
    getString():string
}
interface normalCard extends card{
    number:number,
    color:color
}
interface king extends card{
    type:"big"|"small"
}

type poker=card [];
function createPoker():poker{
    let poker:card []=[];
    const colors=Object.values(color)
    for(let i=1;i<=13;i++){
        for(let j of colors){
            // const p={           //类型兼容性
            //     number:i,
            //     color:j,
            //     getString:()=>this.number+this.color
            // }
            // poker.push(p)
            poker.push(<card>{
                number:i,
                color:j,
                getString:()=>this.number+this.color
            })
            
        }
    }
    let smKing:king={
        type:"small",
        getString:()=>this.type
    }
    let bigKing:king={
        type:"big",
        getString:()=>this.type
    }
    poker.push(smKing,bigKing)
    return poker;
}

function printPoker(poker:poker){
    for(let i=0;i<52;i++){
        poker[i].getString();
    }
}
const poker=createPoker();
console.log(poker)
// printPoker(poker)