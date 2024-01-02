const axios = require('axios');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
// require('dotenv').config
dotenv.config()

const app = express()
app.use(cors())
PORT = 3000

app.get('/flights', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://flightera-flight-data.p.rapidapi.com/airline/flights',
        params: {
          ident: 'ly',
          time: '2024-01-01T23:00:00.000z'
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'flightera-flight-data.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data.flights.slice(0,5))
      } catch (error) {
          console.error(error);
      }      
})  


app.listen(PORT, () => console.log('running on port ' + PORT));