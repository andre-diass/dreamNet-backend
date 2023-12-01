/// @ts-check
const output = {
  STAGE: 'dev',
  DB: '${ssm:DEV_MONGODB_URI}',
};

module.exports = output;
