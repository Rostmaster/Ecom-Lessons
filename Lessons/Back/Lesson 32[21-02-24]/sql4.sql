-- create table prices (id integer PRIMARY key, price integer);
-- insert into prices values (1,3);
-- insert into prices values (2,12);
-- insert into prices values (3,7);
-- insert into prices values (4,5);
-- insert into prices values (5,3);
-- insert into prices values (6,2);
-- insert into prices values (7,3);
-- insert into prices values (8,10);
select s.id, s.name, s.amount, s.maavar, p.price from shop s join prices p on s.id = p.id
