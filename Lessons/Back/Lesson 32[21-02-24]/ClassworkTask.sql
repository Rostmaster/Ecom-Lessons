-- create table students (id integer primary key AUTOINCREMENT, name text, city text, birth integer)  		--1
-- create table grades (id integer PRIMARY key, grade integer)												--1
-- insert into students values (9223372036854775807,'shalom', 'tel aviv', 1974)
-- insert into students values(2, 'yuri', 'raanana', 1980);
-- insert into students values(3,'anat', 'rishon', 1994);
-- insert into students values(4,'dana', 'rehovot', 1990);
-- insert into students values(5,'omer', 'jerusalem', 1987);
-- insert into grades values (1, 95);
-- insert into grades values (2, 70);
-- insert into grades values (3, 85);
-- insert into grades values (4, 99);
-- insert into grades values (5, 91);
--select s.name as 'Earth name', g.grade as 'Brain capasity' from students s join grades g on s.id = g.id; 	--2
--select avg(grade) from grades 																			--3
-- select s.name, g.grade, iif(g.grade>90, 'Yes', '') as 'Excellent' from students s join grades g on s.id=g.id --4
--select s.name, g.grade from students s join grades g on s.id=g.id where g.grade > (select avg(grade)from grades) --5
-- select s.name, g.grade from students s join grades g on s.id=g.id where g.grade = (select max(grade)from grades) --6
