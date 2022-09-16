const { getOneGroupClass } = require("../../queries/group-class");
const errors = require("../../errors/commons");


module.exports = (db) => async (req, res, next) => {

    const {name} = req.body;
    console.log(name)
    const queryResult = await getOneGroupClass(db)({name});

    //const { group, name: nombre, type, time, level } = queryResult.data;


    if (!queryResult.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data:queryResult
    });
};

