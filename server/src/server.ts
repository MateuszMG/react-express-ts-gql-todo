import dotenv from 'dotenv';
dotenv.config();
import { config } from './config/config';

import { mongooseConnect } from './config/db';
mongooseConnect();

import { startStandaloneServer } from '@apollo/server/standalone';
import app from './app';
import { apolloServer } from './apollo/apolloServer';

async function bootstrap() {
  app.listen(config.restApiPort, () => {
    console.log(
      'App listening on port: ' +
        config.restApiPort +
        '. ' +
        new Date().toLocaleTimeString(),
    );
  });

  const { url } = await startStandaloneServer(await apolloServer(), {
    listen: { port: config.graphqlPort },
  });
  console.log(`Grapgql server ready at: ${url}`);
}

bootstrap();
