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
6) Finally I return the relevant data stripping the object it's wrapped in

As this process is requirede for every API end point I have created a util function called handleFetchResponse

*/

// GET Topics
export async function getTopics() {
  const response = await fetch(`${API_BASE_URL}/topics`, { method: 'GET' }); //  N.B GET is redundant as it's the default
  const data = await handleFetchResponse(response);
  return data.topics;
}

// helper funciton
async function handleFetchResponse(response) {
  const body = await response.json();
  if (!response.ok) {
    const error = new Error(body?.msg || 'Something went wrong');
    error.status = response.status;
    error.data = body;
    throw error;
  }
  return body;
}
