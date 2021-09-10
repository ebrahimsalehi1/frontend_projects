create table employees(id int,name varchar(100),salary int,team_id int);
insert into employees(team_id,salary,name,id) values(1,	70000,	'Ali',	1);
insert into employees(team_id,salary,name,id) values(1,	90000,	'Akbar',	2);
insert into employees(team_id,salary,name,id) values(2,	80000,	'Alireza',	3);
insert into employees(team_id,salary,name,id) values(2,	60000,	'Bahram',	4);
insert into employees(team_id,salary,name,id) values(1,	90000,	'Asghar',	5);

create table teams (id int,name varchar(100));
insert into teams (name,id) values('Shopping-Operation',	1);
insert into teams (name,id) values('Fulfillment',	2);
insert into teams (name,id) values('Marketplace',	3);
