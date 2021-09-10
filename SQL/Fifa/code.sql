
-- Section1
    INSERT INTO player(id,team,age)
    SELECT p.id,'Chelsea',24
    FROM Person p
    WHERE NOT EXISTS (
        SELECT 1 FROM refree where id=p.id 
        UNION ALL
        SELECT 2 FROM player where id=p.id 
        UNION ALL
        SELECT 3 FROM coach  where id=p.id 
    )
-- Section2

   SELECT p.id,p.name
   FROM person p,coach c,player pl
   WHERE p.id=c.id AND p.id=pl.id AND c.team<>pl.team
-- Section3
ALTER TABLE player ADD CONSTRAINT fk_team_player FOREIGN KEY(team) REFERENCES team(name) ON DELETE CASCADE;
