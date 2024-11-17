const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;


// Enable CORS for all origins
app.use(cors());
// Define the endpoint to fetch data from an external link
//the api is to fetch all data 
app.get('/fetch-data', async (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/posts'; // Replace this with your desired external link

  try {
    // Fetch data from the external link
    const response = await axios.get(url);
    // Send the fetched data as the response
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Define the endpoint to fetch only 'userId' from the external link
//the api is to fetch all the specific data 
app.get('/fetch-userids', async (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // External link for posts data
  
    try {
      // Fetch data from the external link
      const response = await axios.get(url);
      
      // Extract only the 'userId' from each post
      const userIds = response.data.map(post => post.userId);
      
      // Send the userIds as the response
      res.json(userIds);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });


  // Define the endpoint to fetch only 'id' and 'title' from the external link
  //the api is to fetch two specific data
app.get('/fetch-id-title', async (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // External link for posts data
  
    try {
      // Fetch data from the external link
      const response = await axios.get(url);
      
      // Extract only the 'id' and 'title' from each post
      const idTitleData = response.data.map(post => ({
        id: post.id,
        title: post.title
      }));
      
      // Send the extracted data as the response
      res.json(idTitleData);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

  // Define the endpoint to fetch 'title' by 'userId'
  //the api is to fetch by given inpiut 

app.get('/fetch-titles/:userId', async (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // External link for posts data
    const { userId } = req.params; // Extract the userId from the request parameters
  
    try {
      // Fetch data from the external link
      const response = await axios.get(url);
  
      // Filter the data by userId and extract titles
      const titles = response.data
        .filter(post => post.userId === parseInt(userId)) // Filter by userId
        .map(post => post.title); // Extract titles
  
      // Check if no titles found for the given userId
      if (titles.length === 0) {
        return res.status(404).json({ error: `No titles found for userId ${userId}` });
      }
  
      // Send the titles as the response
      res.json({ userId, titles });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

 // Define the endpoint where userId must match id to return the title
 //the api where two entitys should match
app.get('/fetch-title/:userId', async (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // External link for posts data
    const { userId } = req.params; // Extract userId from request parameters
  
    try {
      // Fetch data from the external link
      const response = await axios.get(url);
  
      // Find the post where userId is equal to id
      const post = response.data.find(
        p => p.userId === parseInt(userId) && p.id === parseInt(userId)
      );
  
      // If no matching post is found, return a 404 error
      if (!post) {
        return res.status(404).json({
          error: `No title found where userId and id are both ${userId}`
        });
      }
  
      // Return the matching title
      res.json({ title: post.title });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


