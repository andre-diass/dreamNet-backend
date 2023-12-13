const output = {
  STAGE: 'prod',
  DB: '${ssm:DEV_MONGODB_URI}',
  JWTSECRET: '${ssm:DEV_JWTSECRET}',
};

module.exports = output;
