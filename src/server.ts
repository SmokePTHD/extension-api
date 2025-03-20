import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { createSchema } from "./schema";

dotenv.config();

const startServer = async () => {
  const app = express();
  app.use(cors());

  const schema = await createSchema();
  const server = new ApolloServer({ schema });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT;
  app.listen(PORT, () => console.log(`-> http://localhost:${PORT}/graphql <-`));
};

startServer();
