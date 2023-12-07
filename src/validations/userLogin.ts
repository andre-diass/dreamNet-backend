import Joi from 'joi';

export const userLoginSchema = Joi.object({
  userID: Joi.string().required(),
  accountID: Joi.string().required(),
}).required();
