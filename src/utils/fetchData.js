import React from 'react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a14288d59fmsh2ab2e67fabd1675p1c8b5bjsn92daa6a7c791',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data);
    return data;
}
