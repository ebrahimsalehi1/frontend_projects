-- Section1
UPDATE foods
SET recipe = REPLACE(recipe,'@hamid_ashpazbashi2','@hamid_ashpazbashi')
WHERE recipe LIKE '%@hamid_ashpazbashi2%';
-- Section2
   
-- Section3

-- Section4
SELECT fi.food_id AS id
FROM foods f,food_ingredients fi, ingredients i,user_ingredients ui,users u
WHERE f.id=fi.food_id AND
	  fi.ingredient_id=i.id AND 
      i.id=ui.ingredient_id AND
      ui.user_id=u.id AND 
      u.username='quera'
ORDER BY fi.food_id DESC;