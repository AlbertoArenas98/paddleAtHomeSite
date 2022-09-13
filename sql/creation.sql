
DROP TABLE IF EXISTS class_user;
DROP TABLE IF EXISTS group_class; 
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS levels;
DROP TABLE IF EXISTS group_type;
DROP TABLE IF EXISTS day_time;
DROP TABLE IF EXISTS users; 
DROP EXTENSION IF EXISTS "uuid-ossp";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS cities (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS group_type (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  type VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS day_time (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  time VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS levels (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  level VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(20) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
    cities_id uuid REFERENCES cities
      ON UPDATE CASCADE
      ON DELETE SET NULL,
  group_type_id uuid REFERENCES group_type
      ON UPDATE CASCADE
      ON DELETE SET NULL,
  day_time_id uuid REFERENCES day_time
      ON UPDATE CASCADE
      ON DELETE SET NULL,
  levels_id uuid REFERENCES levels
      ON UPDATE CASCADE
      ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS group_class (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(20) NOT NULL UNIQUE,
  cities_id uuid REFERENCES cities
      ON UPDATE CASCADE
      ON DELETE SET NULL,
  group_type_id uuid REFERENCES group_type
      ON UPDATE CASCADE
      ON DELETE SET NULL,
  day_time_id uuid REFERENCES day_time
      ON UPDATE CASCADE
      ON DELETE SET NULL,
  levels_id uuid REFERENCES levels
      ON UPDATE CASCADE
      ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS class_user (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  number VARCHAR(20) NOT NULL UNIQUE,
  group_class_id uuid REFERENCES group_class
      ON UPDATE CASCADE
      ON DELETE SET NULL,
  users_id uuid REFERENCES users
      ON UPDATE CASCADE
      ON DELETE SET NULL
);



