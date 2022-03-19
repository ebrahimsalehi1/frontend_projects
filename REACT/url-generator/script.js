const paramTemplate = '<input class="q-input" placeholder="Param" />';
const queryTemplate =
  '<input class="q-input" placeholder="Query Key" /><input class="q-input" placeholder="Query Value" />';
const baseUrl = "https://website.ir";

const addNewParam = () => {

  let elem = document.querySelectorAll('.q-input');

  flag=true;
  for(let item of elem){
    if(item.placeholder=="Param" && item.value.length===0)
      flag = false;
  }
  if(!flag)
    return;

 const elemParams = document.querySelector('#params-container').querySelector(".keyValue-box");

 const newElem = document.createElement('input');
 newElem.setAttribute('class','q-input');
 newElem.setAttribute('placeholder','Param');

 elemParams.appendChild(newElem);

};
const addNewQuery = () => {

  let elem = document.querySelectorAll('.q-input');

  flag=true;
  for(let item of elem){
    if(item.placeholder=="Query Key" && item.value.length===0)
      flag = false;
  }
  if(!flag)
    return;

  const elemQueries = document.querySelector('#queries-container').querySelector(".keyValue-box");

  const newElemKey = document.createElement('input');
 newElemKey.setAttribute('class','q-input');
 newElemKey.setAttribute('placeholder','Query Key');
 elemQueries.appendChild(newElemKey);

 const newElemValue = document.createElement('input');
 newElemValue.setAttribute('class','q-input');
 newElemValue.setAttribute('placeholder','Query Value');
 elemQueries.appendChild(newElemValue);

};
const generateURL = () => {
  let elem = document.querySelectorAll('.q-input');
  let myUrl =baseUrl;

  //debugger;
  for(let item of elem){
    if(item.placeholder=="Param")
      myUrl+=(item.value.length>0 ? '/':'')+item.value;
  }

  const arr = [];
  count=0;
  let obj={};
  function getRow(key,value){
    return {key,value}
  }
  //debugger;
  for(let item of elem){
    //obj={}
    if(item.placeholder=="Query Key"){
      obj.key=item.value;
    }

    if(item.placeholder=="Query Value"){
      obj.value=item.value;//.toLowerCase();
      //debugger;
      const foundIndex = arr.findIndex(item=>item.key==obj.key);
      
      if(foundIndex!=-1){
      
        arr[foundIndex].value=obj.value;          
       
        //arr.splice(foundIndex,1);
      }
      else{
        if(obj.key!='' && obj.value!='')
          arr.push(new getRow(obj.key,obj.value));
      }
    }
            
  } // for

  myUrl+=arr.length>0 ? '?':'';
  arr.forEach((item,index)=>{
    myUrl+=(index==0 ? '':'&')+item.key+'='+item.value;
  })
  // console.log(myUrl);

  renderUrl(myUrl);

};

const renderUrl = (url) => {
  const el = document.getElementById("url-container");
  el.innerHTML = `<p>${url}</p>`;
};

document.getElementById("param-submit").addEventListener("click", addNewParam);
document.getElementById("query-submit").addEventListener("click", addNewQuery);
document.getElementById("generate").addEventListener("click", generateURL);
