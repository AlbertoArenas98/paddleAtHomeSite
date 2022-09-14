const { sql } = require("slonik");

const selectFullUser = ({ email }) => {
  return sql`
  SELECT first_name, email, password, cities.name, group_type.type, levels.level, day_time.time FROM users
  JOIN cities 
  ON cities_id = cities.id
  JOIN group_type
  ON group_type_id = group_type.id
  JOIN levels
  ON levels_id = levels.id
  JOIN day_time
  ON day_time_id = day_time.id
     WHERE email = ${email};
  `;
};

const insertUser = ({ email, password, first_name, cities, group_type, day_time, levels }) => {
  return sql`
    INSERT INTO users (
      email, password, first_name, cities_id, group_type_id, day_time_id, levels_id
    ) VALUES (
      ${email}, ${password}, ${first_name}, (SELECT id FROM cities WHERE name = ${cities}),(SELECT id FROM group_type WHERE type = ${group_type}), (SELECT id FROM day_time WHERE time = ${day_time}), (SELECT id FROM levels WHERE level = ${levels})
    );
  `;
};

module.exports = {
  selectFullUser,
  insertUser,
};