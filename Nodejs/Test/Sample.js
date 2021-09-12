
console.log('this is a test ...');

list = [
    {x:'x 1',y:1},
    {x:'x 2',y:2},
    {x:'x 3',y:3,z:false},
    {x:'x 4',y:4,z:false}
]

out = list.sort((a,b)=>{
    const res = (b.z==undefined ? 0:Number(b.z)) - (a.z==undefined ? 0:Number(a.z)) 
    //console.log(a.z,b.z,res);
    return res;
});

console.log(out);
