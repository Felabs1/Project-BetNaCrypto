import React from 'react'

const sportsApi = () => {
  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bf29093fbamsh7829f6c032b47f6p12fa5ejsn944949a3de98',
            'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
        }
    };
    
    fetch('https://sportspage-feeds.p.rapidapi.com/teams?league=%3CREQUIRED%3E', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  
    
}

export default sportsApi
