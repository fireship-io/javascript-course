import * as dotenv from 'dotenv';
dotenv.config();

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI,
});

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/dream', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
    });
    console.log(aiResponse.data);
    const image = aiResponse.data[0].url;
    console.log(image);

    res.send({ image }); // Sends the response to the client
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status);  // e.g. 401
      console.error(error.message); // e.g. The authentication token you passed was invalid...
      console.error(error.code);    // e.g. 'invalid_api_key'
      console.error(error.type);    // e.g. 'invalid_request_error'
    } else {
      console.error(error)
      res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
  }
});


app.listen(8080, () => console.log('make art on http://localhost:8080/dream'));
