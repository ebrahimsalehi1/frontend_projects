var arr = [
  "Alborz",
  "Ardabil",
  "Bushehr",
  "Chaharmahal and Bakhtiari",
  "East Azerbaijan",
  "Isfahan",
  "Fars",
  "Gilan",
  "Golestan",
  "Hamadan",
  "Hormozgan",
  "Ilam",
  "Kerman",
  "Kermanshah",
  "Khuzestan",
  "Kohgiluyeh and Boyer-Ahmad",
  "Kurdistan",
  "Lorestan",
  "Markazi",
  "Mazandaran",
  "North Khorasan",
  "Qazvin",
  "Qom",
  "Razavi Khorasan",
  "Semnan",
  "Sistan and Baluchestan",
  "South Khorasan",
  "Tehran",
  "West Azerbaijan",
  "Yazd",
  "Zanjan"
];
// ...

//autocomplete(document.getElementById("myInput"), arr);
//autocomplete2(document.getElementById("myInput"), arr);

const cities = arr;
var inputName = document.getElementById("myInput");
let filteredCities;

function makeNewElement(text,className){

  var area = document.getElementsByClassName("autocomplete");

    var divBase = document.getElementById("divBase");
    if(!divBase){
        divBase = document.createElement("DIV");
        divBase.setAttribute("id","divBase");
        area[0].appendChild(divBase);
    }

    var div = document.getElementById("cities-"+text);
        if(!div){
            div = document.createElement("div");
            div.setAttribute("id","cities-"+text)
            div.setAttribute("class",className);
          
            div.addEventListener("click",function doSomething(){
              if(text!=="Not Found!‍")
                inputName.value = text;
              
                removeAllElements();
            });
        }
        div.innerHTML = "<div>"+text+"</div>";

        divBase.appendChild(div);
}

function removeAllElements(){
    const divBase = document.getElementById("divBase");
    if(divBase)
        divBase.parentNode.removeChild(divBase);

}

inputName.addEventListener("keyup",function handlerInputName(e)
{
    removeAllElements();

    const val = e.target.value;
    if(val.length===0){
      filteredCities = [];
      return;
    }
    else  
      filteredCities = cities.filter(item=>item.toUpperCase().startsWith(val.toUpperCase())); 

    if(filteredCities.length===0)
        makeNewElement("Not Found!‍","not-found");
    else
        filteredCities.forEach(item=>{
            makeNewElement(item,"autocomplete-items");
        });
    
});   

document.addEventListener("click",(e)=>{
    removeAllElements();
});
