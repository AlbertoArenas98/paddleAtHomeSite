const { sql } = require("slonik");

const selectOneGroupClass = ({ name }) => {
  return sql`
  SELECT group_class.name AS group, cities.city, group_type.type, levels.level, day_time.time from group_class
  JOIN cities 
  ON cities_id = cities.id
  JOIN group_type
  ON group_type_id = group_type.id
  JOIN levels
  ON levels_id = levels.id
  JOIN day_time
  ON day_time_id = day_time.id
WHERE group_class.name = ${name}
  `;
};

const selectAllGroupClasses = () => {
  return sql`
  SELECT group_class.name AS group, cities.city, group_type.type, levels.level, day_time.time from group_class
  JOIN cities 
  ON cities_id = cities.id
  JOIN group_type
  ON group_type_id = group_type.id
  JOIN levels
  ON levels_id = levels.id
  JOIN day_time
  ON day_time_id = day_time.id
  `;
};

const insertOneGroupClass = ({ name, city, type, time, level }) => {
  return sql`
    INSERT INTO group_class (
      name, cities_id, group_type_id, day_time_id, levels_id
    ) VALUES (
      ${name}, (SELECT id FROM cities WHERE city = ${city}),(SELECT id FROM group_type WHERE type = ${type}), (SELECT id FROM day_time WHERE time = ${time}), (SELECT id FROM levels WHERE level = ${level})
    );
  `;
};



module.exports = {
  selectOneGroupClass,
  selectAllGroupClasses,
  insertOneGroupClass
};