
enum color{
    heart="♥",
    spade="♠",
    club="♣",
    diamond="♦"
}
enum digit{
    one="A",
    two="2",
    three="3",
    four="4",
    five="5",
    six="6",
    seven="7",
    eight="8",
    nine="9",
    ten="10",
    eleven="J",
    twelve="Q",
    kine="K"
}
type card={
    number:digit,
    color:color
}
type poker=card [];
function createPoker():poker{
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

function printPoker(poker:poker){
    for(let i=0;i<52;i++){
        let str=poker[i].number+poker[i].color;
        console.log(str)
    }
}
const poker=createPoker();
printPoker(poker)