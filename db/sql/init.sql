USE challenge;

CREATE TABLE test(col VARCHAR(10));

INSERT INTO test(col) VALUES('ok');

CREATE TABLE users
(
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR(16),
pass VARCHAR(256),
PRIMARY KEY (id)
);

-- user_id_1 refers to the user that instantiated the chat
-- user_id_2 refers to the user that received the first chat message
CREATE TABLE chats
(
  id INTEGER AUTO_INCREMENT NOT NULL,
  user_id_1 INTEGER NOT NULL,
  user_id_2 INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE message
(
  id BIGINT AUTO_INCREMENT NOT NULL,
  chat_id INTEGER NOT NULL,
  author_id INTEGER NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
