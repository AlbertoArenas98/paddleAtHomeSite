const { createUser } = require('../../queries/auth');
const { hash } = require('../../utils');
const { register } = require('../../errors/auth');
const errors = require('../../errors/commons');

module.exports = db => async (req, res, next) => {
  const { email, password, first_name } = req.body;

  console.log(email, password, first_name)
  const queryResult = await createUser(db)({
    email,
    password: await hash.encrypt(password),
    first_name
  });
  if (!queryResult.ok) return next(register[queryResult.code] || errors[500]);

  const message = 'Gracias por registrarte en mi Ecommerce, disfruta de nuestros productos';

  // try {
  //   await sendEmail({
  //     email,
  //     subject: 'Bienvenido a mi Ecommerce, gracias por registrarte',
  //     message,
  //   });
  // } catch (error) {
  //   console.log('> error: ', error.message);
  // }

  res.status(200).json({
    success: true,
  });
};