
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PostSchema = z.object({
    name: z.string()
});

export const contract = c.router({
  getPost: {
    method: 'GET',
    path: `/posts/:id`,
    responses: {
      200: PostSchema,
    },
    summary: 'Get a post by id',
  },
});