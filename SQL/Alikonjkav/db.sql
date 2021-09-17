
create table users(id integer primary key,name varchar(255),nick varchar(32))
;
create table relations(
from_user_id INTEGER,
    to_user_id INTEGER,
  blocked  BOOLEAN DEFAULT FALSE,
  blocked_at TIMESTAMP DEFAULT NULL
)
;
create table messages(
id	INTEGER PRIMARY KEY,
  from_user_id	INTEGER,
  to_user_id	INTEGER,
  body	BYTEA,
  created_at	TIMESTAMP,
  edited_at	TIMESTAMP,
  deleted_at	TIMESTAMP
);