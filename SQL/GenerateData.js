var faker = require('faker');
const fs = require('fs');

//var randomName = faker.name.findName(); // Rowan Nikolaus
//var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//var randomCard = faker.helpers.createCard(); // random contact card containing many properties
const arrayListName = [faker.name.firstName(),faker.name.firstName(),faker.name.firstName(),faker.name.firstName(),faker.name.firstName()]

let query='';
const obj = {firstName:''}
for(let i=0;i<20;i++){
    obj.firstName= arrayListName[Math.floor(Math.random()*10)%arrayListName.length].replace("'","");
    query += `INSERT INTO Contacts(ID,FIRST_NAME,LAST_NAME,EMAIL) VALUES 
    (${i+1},'${obj.firstName}','${faker.internet.email().replaceAll("'","")}');\n`;
    console.log(query); 

}

fs.writeFileSync('gen.sql',query);
