let str ="svu";

console.log(str.length);

console.log(str.length-1);//address of particlur  char

console.log(str[2]);

console.log(str[str.length-1]);

let arr =[1,2,3, "joydip", 1.12, true, false, null,undefined,]; "joydip"
console.log(arr[arr.length-2])
console.log(arr[3]);
arr.push("sahoo")  
arr[4]="joydip"
console.log(arr)
arr.pop();

console.log(arr)

let obj ={
    joydip:{class:"b.tech",rn:361,sub:["mm" ,"dbms" ,"cn"]},
    vola:{class:"b.tech",rn:401,sub:["mm" ,"dbms" ,"cn"]},
    1:undefined
}
console.log(obj.joydip) 
console.log(obj["joydip"])

obj.joydip="my name"
console.log(obj);
delete obj.joydip
console.log(obj);

obj.dip = {rn:122 , hobbies:["drawing","reading"]}
console.log(obj)

let name = "biswa";
let Class ="b.tech";
let hobbies =["games"]
let newobj = {
    name , Class , hobbies  
}
console.log(newobj);

let ans = [1,2,3,[9,4,6,[5,1,9]]];
console.log(ans[3][3][0]);

let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}

console.log(superHeroes['1'].villains[0].health);
console.log(superHeroes['2'].metadata.age)
console.log()

// console.log(obj.joydip.sub[1])

