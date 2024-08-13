import { initClient } from "@ts-rest/core";
import { contract } from "./contract.js";
import { ServerInferResponses } from '@ts-rest/core';


type ResponseShapes = ServerInferResponses<typeof contract>

type T = ResponseShapes['getPost']
// type T = {
//  status: 200;
//  body: {
//      name: string;
//  };
//} | {
//  status: 100 | 101 | 102 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 300 | 301 | 302 | 303 | 304 | 305 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | ... 30 more ... | 511;
//  body: unknown;
//}

const client = initClient(contract, {
  baseUrl: 'http://localhost:3000',
  baseHeaders: {},
    throwOnUnknownStatus: true,
    validateResponse: true
});

const { body, status } = await client.getPost({
    params: {id: '2'},
}); // body: unknown, status: 100 | 101 ...

if (status === 201) {
  // body is Post
  console.log(body);
} else {
  // body is unknown
  console.log(body);
}