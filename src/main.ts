
import { initServer } from '@ts-rest/fastify';
import fastify from 'fastify';
import { contract } from './contract.js';

const app = fastify();

const s = initServer();

const router = s.router(contract, {
  getPost: async ({ params: { id } }) => {
    const post = {name: "hello"};

    return {
      status: 200,
      body: post,
    };
  },
});

app.register(s.plugin(router));

const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();