import jwt from 'jsonwebtoken';

const secret = 'ssshhh';
const user = {
  id: 123,
  scopes: ['users:read'],
};
const token = jwt.sign({ user }, secret);
console.log(`JWT issued: ${token}`);
