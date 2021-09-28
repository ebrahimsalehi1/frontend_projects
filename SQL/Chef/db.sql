
Create Table users(
    id int(11) primary key auto_increment,
    username varchar(255)
);

create table foods(
    id int(11) primary key auto_increment,
    name varchar(255),
    recipe text
);

create table ingredients(
    id int(11) primary key auto_increment,
    name varchar(255),
    price_per_unit decimal(10,2)
);

create table food_ingredients(
    id int(11) primary key auto_increment,
    food_id int(11) ,
    ingredient_id int(11),
    amount decimal(10,2),
    foreign key (food_id) references foods(id),
    foreign key (ingredient_id) references ingredients(id)
);

create table user_ingredients(
    id int(11) primary key auto_increment,
    user_id int(11),
    ingredient_id int(11),
    amount decimal(10,2),
    foreign key (user_id) references users(id),
    foreign key (ingredient_id) references ingredients(id)
);

create table ratings(
    id int(11) primary key auto_increment,
    user_id int(11),
    food_id int(11),
    rate tinyint(1),
    foreign key(user_id) references users(id),
    foreign key(food_id) references foods(id)
);
