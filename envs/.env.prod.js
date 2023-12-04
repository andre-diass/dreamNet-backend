const output = {
  STAGE: 'prod',
  DB: '${ssm:DEV_MONGODB_URI}',
};

module.exports = output;
