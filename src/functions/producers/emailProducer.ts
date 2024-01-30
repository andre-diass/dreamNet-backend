/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import crypto from 'crypto';

const client = new SQSClient({ region: 'us-west-1' });

// eslint-disable-next-line consistent-return
export async function emailProducer(objIP) {
  const input = {
    QueueUrl: 'https://sqs.us-west-1.amazonaws.com/202260806763/acesso.fifo',
    MessageBody: JSON.stringify(objIP),
    DelaySeconds: 0,
    MessageDeduplicationId: crypto.randomUUID(),
    MessageGroupId: 'email',
  };

  try {
    const command = new SendMessageCommand(input);
    const mensagem = await client.send(command);
    console.log('mensagem email enviada com sucesso', mensagem.MessageId);
    return mensagem;
  } catch (erro) {
    console.log(erro);
  }
}
