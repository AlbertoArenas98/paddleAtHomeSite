const { sql } = require("slonik");

const selectFullUser = ({ email }) => {
  return sql`
    SELECT * FROM users
    WHERE email = ${email};
  `;
};

const insertUser = ({ email, password, first_name}) => {
  return sql`
    INSERT INTO users (
      email, password, first_name
    ) VALUES (
      ${email}, ${password}, ${first_name}
    );
  `;
};

module.exports = {
  selectFullUser,
  insertUser,
};