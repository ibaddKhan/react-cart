import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className='flex justify-center items-center flex-wrap'>
        {
          arr && arr.map((item, i) => (
            item.condition === 'new' ? 
              <CardDefault key={i} /> :
              <div className="border m-10" key={i}>
                <img src={item.image} width={200} />
                <h5>{item.title}</h5>
              </div>
          ))
        }
      </div>
    </>
  );
}

export default Home;
