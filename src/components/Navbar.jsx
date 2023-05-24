import React, { useState } from 'react'
import {Image, Button} from 'antd'
import './navbar.css'
import {MenuUnfoldOutlined ,YoutubeFilled,SearchOutlined ,CloseOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom"
import Logo from '../assets/logo.jpg'
import { useStateContext } from '../state/StateContext'
const Navbar = () => {
  const {setDisplay,display} = useStateContext()
  const [input , setInput] = useState("")
  
  function handleChange(e){
    setInput(e.target.value)
  }
  function handleClear(){
    setInput("")
  }

  function handleDisplay(){
      setDisplay(prev => !prev)
  }
   return (
    <nav className='navbar-container'>
       <div className='navbar'>
        <div className='navbar-icons'>
              <Button 
               onClick={handleDisplay}
              style={{background:'none', color:'whitesmoke', border:'none' , fontSize:'1.5em', marginBottom:'5px',padding:'0'}}>
                <MenuUnfoldOutlined />
              </Button>
              <Link to="/" style={{textDecoration:"none", color:"white"}}>
             <div className='navbar-logo'>
                <YoutubeFilled className='logo'/>
                 <span>WeTube</span>
            </div>
              </Link>
        </div>
        <div className='navbar-search'>
              <input type="text" placeholder='Search' onChange={(e) => handleChange(e)} value={input}/>
              <button className='close-btn' onClick={handleClear}><CloseOutlined className='close-icon'/></button>
              <button className='search-btn'><SearchOutlined className='search-icon'/></button>
          </div>
            <div>
              <Image src={Logo} width={50} height={50} style={{borderRadius:'50%'}} />
            </div>
       </div>
    </nav>
  )
}

export default Navbar
