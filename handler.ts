import { APIGatewayProxyHandler } from 'aws-lambda';
import User from './models/User';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  let response = funcLogic();
  return {
    statusCode: 200,
    body: response,
  };
}



function funcLogic(): any {
  let user = new User('Mike', 'John');
  return user.getDetails();
}