const { sql } = require("slonik");

const selectOneProduct = ({productId}) =>{
    return sql `
        SELECT * FROM reviews
        JOIN users
        ON reviews.
        WHERE productId = ${productId};
    `
};

const selectAllProducts = () =>{
    return sql `
    SELECT ref, products.name, price, stock, img, details, rate, categories.name FROM products
    JOIN categories
    ON products.category_id = categories.id
    `;
};

const insertOneProduct = ({productId, category, name, price, quantity, img, details, rate}) =>{
    return sql`
        INSERT INTO products(
            productId, category, name, price, quantity, img, details, rate
        ) VALUES(
            ${productId}, 
            ${category}, 
            ${name}, 
            ${price}, 
            ${quantity}, 
            ${img},
            ${details}, 
            ${rate}
        );
    `;
};

const updateOneProduct = ({productId, category, name, price, quantity, img, details, rate }) => {

    return sql`
        UPDATE products
        SET name = ${name}, category = ${category}, price = ${price}, quantity = ${quantity}, img = ${img}, details = ${details}, rate =${rate}
        WHERE productId = ${productId}
    
    `
};

const deleteOneProduct = ({productId}) =>{

    return sql `
        DELETE FROM products
        WHERE productId = ${productId}
    `
}

module.exports= {
    selectOneProduct,
    selectAllProducts,
    insertOneProduct,
    updateOneProduct,
    deleteOneProduct, 
}