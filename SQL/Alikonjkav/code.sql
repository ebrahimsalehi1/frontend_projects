-- Section1
 select id from users where nick like 'am%' order by id
-- Section2
select from_user_id 
from relations
group by from_user_id
order by 1
-- Section3
select id
from messages
where (from_user_id,to_user_id)
not in (
  select from_user_id,to_user_id
  from relations
  where blocked=true
) and deleted_at is not null
and edited_at is not null
order by 1