-- SQL file for challenge plaintext

CREATE TABLE IF NOT EXISTS Users (
  username TEXT PRIMARY KEY,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  content TEXT NOT NULL
);

INSERT INTO Users VALUES ('admin','SLpAthwrnC55EJ5N');

INSERT INTO Posts (title, date, content) VALUES ('Embracing Diversity: Building Inclusive Communities', '2023-01-05', 'Diversity enriches our communities and drives social progress. By embracing differences in race, ethnicity, gender, and background, we can build inclusive societies that foster creativity, empathy, and equal opportunities. Let''s celebrate diversity and work together to create a world where everyone feels valued and included.');
INSERT INTO Posts (title, date, content) VALUES ('The Rise of E-commerce: Unlocking New Opportunities', '2023-02-10', 'E-commerce has transformed the way we shop, creating a global marketplace accessible to anyone with an internet connection. With convenience, vast product options, and personalized experiences, online shopping has unlocked new opportunities for businesses and consumers alike. Explore the trends, challenges, and potential of this digital revolution.');
INSERT INTO Posts (title, date, content) VALUES ('The Benefits of Meditation for Mind and Body', '2023-03-15', 'Meditation is a powerful practice that offers numerous benefits for our mental and physical well-being. By quieting the mind, reducing stress, and enhancing self-awareness, meditation can improve focus, promote relaxation, and foster a sense of inner peace. Discover the transformative effects of incorporating meditation into your daily routine.');
INSERT INTO Posts (title, date, content) VALUES ('Exploring the Wonders of Deep Learning', '2023-04-20', 'Deep learning, a subset of artificial intelligence, has revolutionized various industries. Through neural networks and complex algorithms, machines can now analyze vast amounts of data, recognize patterns, and make accurate predictions. Join us on this exciting journey of understanding the wonders of deep learning.');
INSERT INTO Posts (title, date, content) VALUES ('The Power of Positive Thinking', '2023-05-01', 'In a world filled with challenges, embracing positive thinking can have a transformative impact on our lives. By focusing on the good, cultivating gratitude, and adopting an optimistic mindset, we can overcome obstacles and find joy in the journey.');
INSERT INTO Posts (title, date, content) VALUES ("May the Force Be With You!", "2023-05-04", "I love Space Wars. It truly is one of a kind masterpiece.");

