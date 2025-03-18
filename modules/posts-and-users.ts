import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
 
  const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
  const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');

  const users = await responseUsers.json();
  const posts = await responsePosts.json();

  posts.forEach(p => {
    p.user = users.find(u => u.id === p.userId)
    delete p.userId;
  });

  return posts;

}