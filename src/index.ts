class User{
    name:string;
    private _age:number;
    private id:number;
    constructor(name:string,id:number){
        this.name=name;
        // this._age=_age;
        this.id=id;
    }
    set age(val:number){
        this._age=val;
    }
    get age(){
        return this._age;
    }
    getId(){
        return this.handleId();
    }
    private handleId(){
        return this.id+"id"
    }
}
const u=new User("liumouyan",100)
u.age=1010;
console.log(u.getId(),u.age);
