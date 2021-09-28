var faker = require('faker');
const fs = require('fs');

//var randomName = faker.name.findName(); // Rowan Nikolaus
//var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//var randomCard = faker.helpers.createCard(); // random contact card containing many properties
const arrayListName = [
    faker.name.firstName(),
    faker.name.firstName(),
    faker.name.firstName(),
    faker.name.firstName(),
    faker.name.firstName(),
    faker.name.firstName(),
    faker.name.firstName(),
    faker.name.firstName(),
    faker.name.firstName(),
    faker.name.firstName()
]

const arrayListLatName = [
    faker.name.lastName(),
    faker.name.lastName(),
    faker.name.lastName(),
    faker.name.lastName(),
    faker.name.lastName(),
    faker.name.lastName(),
    faker.name.lastName(),
    faker.name.lastName(),
    faker.name.lastName(),
    faker.name.lastName()
]

let query='';
let obj = null;
const person = () =>{
    return {
        firstName : arrayListName[Math.floor(Math.random()*10)%arrayListName.length].replace("'",""),
        lastName  :  arrayListName[Math.floor(Math.random()*10)%arrayListName.length].replace("'",""),
        email     : faker.internet.email().replace("'","")
    }
}
for(let i=0;i<15;i++){
    //obj.firstName = arrayListName[Math.floor(Math.random()*10)%arrayListName.length].replace("'","");
    //obj.lastName  =  arrayListName[Math.floor(Math.random()*10)%arrayListName.length].replace("'","");
    //obj.email     = faker.internet.email().replace("'","");

    obj = person();

    query += `INSERT INTO Contacts(ID,FIRST_NAME,LAST_NAME,EMAIL) VALUES 
    (${i+1},'${obj.firstName}','${obj.lastName}','${obj.email}');\n`;
    console.log(query); 
}

fs.writeFileSync('gen.sql',query);
