document.querySelector(".btn").addEventListener("click", () => {
  //Your Code
  //console.log(obj);
  const input = document.querySelector('.input');
  const str = input.value;
  const arr = [...str];

  const isYe = (ch,after)=>{
    //debugger;
    console.log(ch,after);
    const result = ch=="ی" && (after==" " || after=="") ? 0 : 2;
    return result;
  }

  let count=0;
  arr.forEach((ch,index) => {
  count +=  ch=="ی" ? isYe(ch,str.substring(index+1,index+2))    
              : Number(obj[ch] ? obj[ch]:0);
    //console.log(obj[ch],ch);
  });

  const spanResult = document.querySelector('.result');
  spanResult.innerHTML=count;
});
