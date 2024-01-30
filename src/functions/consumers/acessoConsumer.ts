import { APIGatewayProxyHandler } from 'aws-lambda';
import { emailProducer } from '../producers/emailProducer';

export const handler: APIGatewayProxyHandler = async evento => {
  console.log('DADOS EVENTO DO ACESSO CONSUMER', evento);

  // se eu jogar algum erro aqui. exemplo: uma chamada pra uma api externa dando errado, essa mensagem vai pra dlq, e lá eu posso olhar esse erro e debugar. lembrando que o erro pode vir de outra função mas tem que estourar aqui. então no meu catch aqui de chamada pra api eu vou só estourar o erro
  await emailProducer('GATILHO DA FILA DE EMAIL ENVIADA COM SUCESSO');
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda!' }),
  };
};
