interface Config {
  graphqlPort: number;
  restApiPort: number;
  databaseUri: string;
  accessTokenSecret: string;
  refreshTokenSecret: string;
}

const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 4000;
const REST_API_PORT = process.env.REST_API_PORT || 4001;

export const config: Config = {
  graphqlPort: +GRAPHQL_PORT,
  restApiPort: +REST_API_PORT,
  databaseUri: process.env.DATABASE || '',

  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'accessTokenSecret',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'refreshTokenSecret',
};
