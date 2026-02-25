// I import the API base url from the env variables
// This is allows me to dinamically switch between a local server and the hosted version of the API
// depending on whethere I run npm run build or npm run dev

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/* 
I then use fetch() to talk to the API and interact with the database, an alternative would be third party library axios

The pattern I follow is similar for all fetch calls:

1) First I make a request from an end point and I obtain a promise that resolves to a response object.
2) If there's a network failure I am protected because the promise will reject and an error is thrown automatically (I will catch it in the react component that calls this function)
3) The response object contains amongst other details 
    the status code 
    an OK key that is true for  success status or fail for fail status
    a body key the value of which is the content of the response which is a redable stream
4) Because the promise is fulffiled even if OK is false I need to use an if clause guard to thrwo an error if OK is false, I make sure to add to a key of the error the status, 
5) Eventually I obtain the request returned body by making a second asynchornosu call through the response method json which returns a promise that resolves to the body 
6) I retrieve the response as text first to safely handle any status code that might return an empty body (like 204). 
7) I then conditionally parse this text into JSON with ternary operator.
6) Finally I return the relevant data stripping the object it's wrapped in

As this process is requirede for every API end point I have created a util function called handleFetchResponse

*/

// GET All Topics
export async function getTopics() {
  const response = await fetch(`${API_BASE_URL}/topics`, { method: 'GET' }); //  N.B GET is redundant as it's the default
  const data = await handleFetchResponse(response);
  console.log('topics >>> ', data.topics);
  return data.topics;
}

// GET All Articles
export async function getArticles() {
  const response = await fetch(`${API_BASE_URL}/articles`, { method: 'GET' }); //  N.B GET is redundant as it's the default
  const data = await handleFetchResponse(response);
  console.log('articles >>> ', data.articles);
  return data.articles;
}

// GET All Users
export async function getUsers() {
  const response = await fetch(`${API_BASE_URL}/users`, { method: 'GET' }); //  N.B GET is redundant as it's the default
  const data = await handleFetchResponse(response);
  console.log('users >>> ', data.users);
  return data.users;
}

export async function getArticleById() {}
//GET /api/articles/:article_id

export async function updateVoteCount() {}
// PATCH /api/articles/:article_id

export async function addCommentByArticleId() {}
//   POST /api/articles/:article_id/comments

export async function getCommentsByArticleId() {}
//   GET /api/articles/:article_id/comments

export async function deleteCommentById() {}
//   DELETE /api/comments/:comment_id

export async function getUserByUsername() {}
//   GET /api/users/:username

// helper function
async function handleFetchResponse(response) {
  const text = await response.text();
  const body = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const error = new Error(body?.msg || 'Something went wrong');
    error.status = response.status;
    error.data = body;
    throw error;
  }
  return body;
}
