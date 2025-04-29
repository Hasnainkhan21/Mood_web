import React, { useEffect, useState } from 'react'

function Api() {


const [data, setData] = useState([])

useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          const data = await response.json();
          setData(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      fetchData();
      
},[])

  return (
    <>
   </>
  )
}
export default Api
