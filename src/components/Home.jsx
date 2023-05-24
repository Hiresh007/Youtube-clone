import React, { useState } from 'react'
import useFetch from "../fetch/useFetch";
import { Pagination , Space } from 'antd';
import Cards from './Cards';
import './home.css'
import { useStateContext } from '../state/StateContext';
const Home = () => {
  const {setPage, page} = useStateContext()
  const { data } = useFetch(page-1);
  const onChange = (page) => {
    setPage(page);
    console.log(page)
  };

  return (
    <div className='home-container'>
    <div className='home-pagination'>
       <Pagination  current={page} 
        total={90} onChange={onChange}/>
    </div>
    <Space className='home-display'>
      {
        data.map((item) => (
          <Cards item = {item} key={data.postId}/>
        ))
      }
    </Space>
    </div>
  )
}

export default Home
