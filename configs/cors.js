const whitelist = ["http://localhost:3006"];

module.exports = {
  origin: (origin, callback) => {
    if(!origin){//for bypassing postman req with  no origin
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error());
    }
  },
  credentials: true,
};