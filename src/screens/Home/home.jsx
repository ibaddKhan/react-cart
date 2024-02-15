import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card';
const Home = () => {
  let [arr, setArr] = useState(null);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/').then((res) => {
      setArr(res.data);
    });
  }, []);

  console.log(arr);

  return (
    <>
      <div className='flex flex-wrap gap-5'>
        {
          arr && arr.map((item, i) => (
            item.description.length > 100 ? item.description = item.description.substring(0, 100) + '...' : item.description, 
            
           <Card key={i} title={item.title} img={item.image} price={item.price} desc={item.description}/>
          ))
        }
      </div>
    </>
  );
}

export default Home;
