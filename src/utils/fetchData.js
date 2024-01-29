import React from 'react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a24f534d51msh1dde772c9163457p144f03jsne365b8960fe6',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
