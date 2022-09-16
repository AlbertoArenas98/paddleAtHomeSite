const { createOneGroupClass } = require("../../queries/group-class");
const errors = require("../../errors/commons");


module.exports = (db) => async (req, res, next) => {

    const { name, city, type, time, level } = req.body


    //const { group, name: nombre, type, time, level } = queryResult.data;
    console.log(req.body)

    const queryResult = await createOneGroupClass(db)({
        name,
        city,
        type,
        time,
        level
    });


    if (!queryResult.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: queryResult
    });
};
