const router = require("express").Router();
const { checker } = require("../../middlewares");

const forms = {
    create: ['ref', 'name', 'price', 'stock', 'img', 'details', 'category_id'],
    update: ['ref', 'name', 'price', 'stock', 'img', 'details', 'category_id'],
    remove: ['ref']
}

module.exports = (db) => {
    
    router.get("/get-one", require("./get-one")(db));
    router.get("/get-all", require("./get-all")(db));
    router.get("/create-one", require("./create-one")(db));

    //router.post("/create", checker(...forms.create), require("./create")(db));
    //router.post("/update", checker(...forms.update), require("./update")(db));
    //router.post("/remove", checker(...forms.remove), require("./remove")(db));

    return router;
}