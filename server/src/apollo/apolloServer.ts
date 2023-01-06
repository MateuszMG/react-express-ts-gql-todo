import { ApolloServer, ApolloServerOptions, BaseContext } from '@apollo/server';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import { TodoResolver } from '../modules/todo/TodoResolver';

const resolvers = [TodoResolver] as const;

export const apolloServer = async () =>
  new ApolloServer({
    schema: await buildSchema({
      resolvers,
      emitSchemaFile: path.resolve(__dirname, '../../schema.gql'),
    }),
  });
