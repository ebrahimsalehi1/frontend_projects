-- Section1
SELECT MAX(salary) AS salary FROM employees;
-- Section2
SELECT t.name AS team,e.name AS employee,emp_max.salary
FROM (
    SELECT e.team_id ,MAX(e.salary) AS salary
    FROM employees e
    GROUP BY e.team_id    
) emp_max,employees e,teams t
WHERE emp_max.salary=e.salary  AND emp_max.team_id=e.team_id AND e.team_id=t.id
ORDER BY 3 DESC,2;
