type callBack<U,T>=(v:U,k:T)=>void
class MyMap<K,V>{
    private keys:K []=[]
    private values:V []=[]
    private _size:number
    get size(){
        return this.keys.length;
    }
    set(key:K,value:V){
        const i=this.keys.indexOf(key);
        if(i==-1){
            this.keys.push(key);
            this.values.push(value)
        }else{
            this.values[i]=value;
        }
    }
    get(key:K):V|boolean{
        const i=this.keys.indexOf(key);
        if(i==-1){
            return false;
        }else{
            return this.values[i]
        }
    }
    has(key:K):boolean{
        return this.keys.includes(key);
    }
    delete(key:K):boolean{
        const i=this.keys.indexOf(key);
        if(i>-1){
            this.keys.splice(i,1);
            this.values.splice(i,1);
            return true;
        }else{
            return false;
        }
    }
    forEach(callBack:callBack<K,V>){
            this.keys.forEach((key,index)=>{
                const value=this.values[index];
                callBack(key,value);
            })
    }
}
const map=new MyMap<string,number>()
map.set('set1',100)
map.set('set2',100)
console.log(map.get("set1"))
map.delete("set1")
console.log(map.has("set1"))
map.forEach(function(key,value){
    console.log(key,value)
})
console.log(map.size)
