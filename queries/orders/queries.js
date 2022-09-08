const { sql } = require("slonik");

const selectOneOrder = ({ email }) => {
  
  return sql`
    SELECT *
    FROM users
    JOIN sells
    ON users.id = sells.user_id
    JOIN orders
    ON sells.id = orders.sell_id
    JOIN products
    ON orders.product_id = products.id
    WHERE email= ${ email }

    `; // ver si dejamos sell_id o cambiamos a otra ref
};

const selectAllOrders = () => {
  return sql`
  SELECT * FROM orders;`;
};

const insertOneOrder = ({ quantity, sell_id, product_id }) => {
 // console.log(quantity, sell_Id, product_id)
  return sql` INSERT INTO orders (quantity, sell_id, product_id) 
  VALUES (${quantity}, (SELECT id FROM sells WHERE id = ${sell_id}),
  (SELECT id FROM products WHERE id = ${product_id}));
  `;
};

const deleteOneOrder = ({ sell_id }) => {
  console.log(sell_id )
  return sql`
      DELETE FROM orders
      WHERE sell_id = ${sell_id}
  `; // ver si dejamos sell_id o cambiamos a otra ref
};

module.exports = {
  selectOneOrder,
  selectAllOrders,
  insertOneOrder,
  deleteOneOrder,
};