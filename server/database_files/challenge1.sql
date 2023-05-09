PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `users` (
`user_id` int NOT NULL,
`first_name` text DEFAULT NULL,
`last_name` text DEFAULT NULL,
`user` text DEFAULT NULL,
`password` text DEFAULT NULL,
PRIMARY KEY (`user_id`)
);
INSERT INTO users VALUES(1,'admin','admin','admin','password');
INSERT INTO users VALUES(3,'Hack','Me','1337','charley');
INSERT INTO users VALUES(4,'Pablo','Picasso','pablo','letmein');
INSERT INTO users VALUES(5,'Bob','Smith','smithy','password');
INSERT INTO users VALUES(2,'Gordon','Brown','gordonb','abc123');

CREATE TABLE TrackedUsers (username varchar(255), cookie_value varchar(255));
INSERT INTO TrackedUsers VALUES('pablo','cookie_value');

CREATE TABLE posts (id INT IDENTITY(1,1) PRIMARY KEY, user TEXT NOT NULL, content TEXT NOT NULL);
INSERT INTO posts VALUES(NULL,'admin','Welcome to Cookie Monster, please follow the rules and have fun!');
INSERT INTO posts VALUES(NULL,'smithy','hello everybody :)');
INSERT INTO posts VALUES(NULL,'pablo','hi, i''m pablo');
INSERT INTO posts VALUES(NULL,'pablo','i like sql');
COMMIT;
