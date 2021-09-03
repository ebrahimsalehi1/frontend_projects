-- Section1
select id from users where name like 'ali%' order by id;
-- Section2
select sum(o.price) from deliveries d,orders o where d.id=o.delivery_id 
and YEAR(d.requested_at)=2020;    
-- Section3
select  de.id,sum(r.rate)
from drivers dr,deliveries de,rates r
where dr.id=de.driver_id and de.id=r.delivery_id
group by de.id
order by 2 desc,1 asc
limit 10;
-- Section4  
select de.id,de.driver_id
from drivers dr,deliveries de
where dr.id=de.driver_id and TIMESTAMPDIFF(hour,de.requested_at,de.delivered_at)>=3
order by TIMESTAMPDIFF(hour,de.requested_at,de.delivered_at);	
-- Section5
select res.name,res.phone
from 
(
	select u.name,u.phone,de.id,de.driver_id,de.src,de.dest
	from deliveries de,users u
	where de.user_id=u.id and
	12742 * asin(sqrt(0.5 - cos((st_x(de.dest) - st_x(de.src)) * pi()/180)/2 + 
						cos(st_x(de.src) * pi()/180) * cos(st_x(de.dest) * pi()/180) * 
						(1 - cos((st_y(de.dest) - st_y(de.src)) * pi()/180))/2))>=2
) res
group by res.name,res.phone
having count(*)>=5;  