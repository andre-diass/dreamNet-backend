import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async evento => {
  console.log('DADOS EVENTO DO CONSUMER', evento);

  // se eu jogar algum erro aqui. exemplo: uma chamada pra uma api externa dando errado, essa mensagem vai pra dlq, e lá eu posso olhar esse erro e debugar. lembrando que o erro pode vir de outra função mas tem que estourar aqui. então no meu catch aqui de chamada pra api eu vou só estourar o erro

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda!' }),
  };
};
