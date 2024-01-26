/// @ts-check
const output = {
  STAGE: 'dev',
  DB: '${ssm:DEV_MONGODB_URI}',
  JWTSECRET: '${ssm:DEV_JWTSECRET}',
  SQS_QUEUE_ACESSO_URL: '{ Ref: FilaAcessos }',
};

module.exports = output;
