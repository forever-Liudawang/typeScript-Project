class User{
    name:string
    readonly age:number
    private id:number
    constructor(name:string,age:number,id:number){
        this.name=name;
        this.age=age;
        this.id=id;
    }
}
const u=new User("liumouyan",100,10)
