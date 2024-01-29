import React from 'react'

export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a14288d59fmsh2ab2e67fabd1675p1c8b5bjsn92daa6a7c791',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a24f534d51msh1dde772c9163457p144f03jsne365b8960fe6',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = res.json();

    console.log(data);
    return data;
}
