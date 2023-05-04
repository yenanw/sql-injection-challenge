CREATE TABLE IF NOT EXISTS "users" (
`user_id` int NOT NULL,
`first_name` text DEFAULT NULL,
`last_name` text DEFAULT NULL,
`user` text DEFAULT NULL,
`password` text DEFAULT NULL,
PRIMARY KEY (`user_id`)
);



insert into users values ('1','admin','admin','admin',('password'));
insert into users values ('2','Gordon','Brown','gordonb',('abc123'));
insert into users values ('3','Hack','Me','1337',('charley'));
insert into users values ('4','Pablo','Picasso','pablo',('letmein'));
insert into users values ('5','Bob','Smith','smithy',('password'));

