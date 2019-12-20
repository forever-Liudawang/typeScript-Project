

interface handsome{
    height:number,
    face:string
}
interface User extends handsome{    //接口继承
    readonly name:String,
    age:number,
    intellect:func,
    readonly favorite:readonly string  []       //不能修改数组的引用以及修改数组的值
}

interface func{
    (age:number):number,
}

const A:User={      //必须实现接口的所有属性包括继承的接口
    name:"lige",
    age:100,
    intellect:(age)=>{console.log(this,age); return age+100},
    favorite:["movie","music","basketball"],
    height:180,
    face:"beauty"
}
// A.favorite.push()
console.log(A.intellect.call(A,A.age))


/**
 * 鸭子类型检测
 */
interface Dark{
    weigth:number,
    sing:()=>void,
    sound:"嘎嘎嘎"
}
const person={
    weigth:100,
    sing:()=>{console.log("sing")},
    height:180,
    sound:"嘎嘎嘎" as "嘎嘎嘎"  //类型断言
}
const dark:Dark=person;
console.log(dark.sing())

const arr=[1,2,3,4,56];
interface cb{
    (n:number):void
}
const callback:cb=(n)=>{
    if(n%2==0){
        console.log("偶数")
    }
}
arr.forEach((item,i)=>{
    callback(item)
})