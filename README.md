Chat API using OpenAI GPT-3.5-Turbo
Introduction
This project implements a RESTful API that uses OpenAI's GPT-3.5-Turbo model to generate coherent responses based on user input. The API receives text input from users and responds with a completed conversation using the OpenAI chat completions API.  
#API Design
Endpoint  
The API exposes a single endpoint for handling chat completions:  
Endpoint: POST /api/complete_chat  
Request Headers:  
Content-Type: application/json  
Authorization: Bearer api-key  
Example Request:  
POST /api/complete_chat HTTP/1.1  
Host: localhost:3000  
Content-Type: application/json  
Authorization: Bearer your-api-key  
{
  "partial_text": "What is OpenAI?"
}
Example Response:  
HTTP/1.1 200 OK  
Content-Type: application/json
{
  "completed_text": "Return response from OpenAI chatCompletion API"
}
User Input Handling  
The API processes text input from users, ensuring proper parsing and handling of different input formats. It expects a JSON payload in the request body with a partial_text field.
Response Generation  
Upon receiving a valid request, the API sends the user's input to the OpenAI chat completions API (https://api.openai.com/v1/chat/completions). The generated response is then returned to the user.
Error Handling  
Robust error handling mechanisms have been implemented to gracefully manage invalid inputs, server errors, and other potential issues. Informative error messages are returned to clients in case of errors.
Testing  
Thorough testing has been conducted, including unit tests for individual components and integration tests for the entire system.   
Setup  
Clone the repository.
Install dependencies using npm install.
Set up your environment variables, including the OPENAI_API_KEY, in a .env file.
Run the server using node app.js.
Usage
Make POST requests to the /api/complete_chat endpoint with the required payload to get completed chat responses.  

Dependencies
axios for making HTTP requests.
body-parser for parsing JSON in request bodies.
express for building the API.
jest for testing.
dotenv for managing environment variables.
openai for interacting with the OpenAI API.
