import { bodyMethod } from "./interface";


class AndyLiu{
    static getAndyLiu(){
        return new AndyLiu()
    };
    private constructor(){

    }
}
const andy=AndyLiu.getAndyLiu();

/**
 * 单例模式
 * 
 */
abstract class Animal{
    abstract type:String;
    constructor(
        public name:string,
        public age:number
    ){

    }
    sayHello(){
        console.log(`我是一只${this.type},我叫${this.name},今年我${this.age}岁了`);
    }
}

class Dog extends Animal implements bodyMethod{
    fei= () => {
        console.log("我可以叫")
    }
    running=()=>{
        console.log("我可以奔跑")
    }
    type: "狗";
    
}
const dog=new Dog("小芳",20);
if(dog.fei&&dog.running){
    
}