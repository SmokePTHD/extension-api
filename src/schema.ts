import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AuthResolver } from "./resolvers/AuthResolver";

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [AuthResolver],
  });
};
