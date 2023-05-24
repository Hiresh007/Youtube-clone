import React from 'react'
import { Button } from 'antd'
import {Link} from 'react-router-dom'
import {MenuOutlined , YoutubeFilled ,HomeOutlined,ScissorOutlined,YoutubeOutlined} from '@ant-design/icons'
import './sidebar.css'
import { useStateContext } from '../state/StateContext'
const Sidebar = () => {
  const {setDisplay} = useStateContext()
  return (
    <div className='sidebar-container'>
    <aside className='sidebar'>
           <div className='sidebar-icons'>
              <Button 
               onClick={() => setDisplay(false)}
              style={{background:'none', color:'whitesmoke', border:'none' , fontSize:'1.5em', marginBottom:'5px',padding:'0' ,marginLeft:'18px'}}>
                <MenuOutlined />
              </Button>
           <div className='sidebar-logo'>
              <YoutubeFilled className='logo'/>
              <span>WeTube</span>
           </div>
        </div>

        <div className='sidebar-text'>
          <ul>
            <li>
              <div className='sidebar-tabs'>
                <HomeOutlined/>
                <span><Link to="/" style={{textDecoration:"none" , color:"white"}}>Home</Link></span>
              </div>
            </li>
            <li>
              <div className='sidebar-tabs'>
                 <ScissorOutlined/>
                 <span>Shorts</span>
              </div>
            </li>
            <li >
              <div className='sidebar-tabs'>
              <YoutubeOutlined/>
              <span>Subscriptions</span>
              </div>
            </li>
          </ul>
        </div>
    </aside>
    </div>
  )
}

export default Sidebar
