function getArr<T>(arr:T[],n:number):T []{
    return arr.splice(0,n)
}
// console.log(getArr<number|string>([1,"ff",3,4,"ff"],4))
type callback<T>=(n:T,i:number)=>boolean;
function filter<T>(arr:T [],callback:callback<T>):T[]{
        let  newArr:T []=[];
        arr.forEach(function(v,i){
            if(callback(v,i)){
                newArr.push(v)
            }
        })
        return newArr;
}
console.log(filter([4,3,8,65],(value,index)=>value%2==0))


/**
 * 多泛型
 */
function combineArr<T,K>(arr1:T [],arr2:K []):(T|K) []{
    return [...arr1,...arr2]
}

interface obj{
    name:string
}
function changeObj<T extends obj>(Obj:T):T{
        Obj.name="100";
        return Obj;
}