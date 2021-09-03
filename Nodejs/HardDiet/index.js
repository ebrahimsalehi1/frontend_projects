const readline = require('readline');

const rl = readline.Interface({
    input:process.stdin,
    output:process.stdout
});

function doOperation(healthLabel){
    const arr = [...healthLabel];
    const numR = arr.reduce((sum,ch)=>sum+(ch=='R' ? 1:0),0);
    const numY = arr.reduce((sum,ch)=>sum+(ch=='Y' ? 1:0),0);
    const numG = arr.reduce((sum,ch)=>sum+(ch=='G' ? 1:0),0);

    if(numR+numY+numG!=5)
        return null;

    if(numR>=3 || numR>=2&&numY>=2 || numR==5 || numY==5)
        return 'nakhor lite';
    else 
        return 'rahat baash';  
}

rl.question("",(healthLabel)=>{
      
    const res = doOperation(healthLabel);
    if(res)
        console.log(res);    
    
    process.exit(0);

});


// rl.on("close",()=>{
//     process.exit(0);
// });

module.exports = {doOperation}