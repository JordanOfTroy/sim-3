drop table if exists users_sim_3;

create table users_sim_3 (
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text
);

drop table if exists posts_sim_3;

create table posts_sim_3(
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer references users_sim_3 (id)
);


