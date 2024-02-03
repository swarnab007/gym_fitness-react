import React from 'react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a14288d59fmsh2ab2e67fabd1675p1c8b5bjsn92daa6a7c791',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const youTubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a14288d59fmsh2ab2e67fabd1675p1c8b5bjsn92daa6a7c791',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const fetchYtData = async (url) => {
  try {
    const response = await fetch(url, youTubeOptions);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}