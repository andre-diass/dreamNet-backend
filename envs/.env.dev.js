/// @ts-check
const output = {
  STAGE: 'dev',
  DB: '${ssm:DEV_MONGODB_URI}',
  JWTSECRET: '${ssm:DEV_JWTSECRET}',
};

module.exports = output;
