import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card';
import Navbar from '../../components/navbar';

const Home = () => {
  const [arr, setArr] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/').then((res) => {
      const products = res.data.map((item) => ({
        ...item,
        truncatedDescription: item.description.length > 100
          ? item.description.substring(0, 100) + '...'
          : item.description,
      }));
      setArr(products);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className='flex mt-16 justify-center flex-wrap gap-5'>
        {arr &&
          arr.map((item, i) => (
            <Card
              key={item.id} 
              index={i}
              array={arr[i]}
              title={item.title}
              img={item.image}
              price={item.price}
              desc={item.truncatedDescription}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
