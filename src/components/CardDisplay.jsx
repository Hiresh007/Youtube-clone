import React from 'react'
import './carddisplay.css'
import { useStateContext } from '../state/StateContext';
import {Card, Typography,Avatar} from "antd";
import useFetch from "../fetch/useFetch";
import {Link} from 'react-router-dom';
const {Meta} = Card
const CardDisplay = () => {
  const {postID,page ,setID} = useStateContext()
  const {data} = useFetch(page-1)

  return (
    <div className='card_display-container'>
       {data.map((item) =>{
        if(item.postId === postID) {
          return (
            <Card 
              className='display-card'
              cover ={
                <video
                src={item?.submission?.mediaUrl}
                autoPlay
                pl
                loop
                controls
                style={{ width: '100%', height:'500px'}}
                />
              }
            >
            <Typography.Title>{item?.submission?.title}</Typography.Title>
            <Meta
              avatar = {<Avatar src = {item?.creator?.pic}/>}
              title= {item?.creator?.name?item.creator.name:"Creator"}
              />
            <div style={{background:"rgba(0,0,0,0.2)",padding:'20px',borderRadius:"1.5em", marginTop:"1.5em",color:"whitesmoke" , display:"flex" ,flexDirection:'column', gap:"12px"}}>
            <Typography.Text>{item?.reaction?.count} views</Typography.Text>
            <Typography.Paragraph>{
              item?.submission?.description
            }</Typography.Paragraph>
            </div>  
            </Card>
          )
        }
       })}
        <div className='display-list'>
          {data.map((item) =>{
            if(item.postId !== postID){
              return (
                <Link to="/video" style={{textDecoration:"none"}}>
                <div className='display-list-cards' onClick={() => setID(item.postId)}>
                    <img
                    src={item?.submission?.thumbnail}
                    alt="Video Poster"
                    className='display-list-thumbnail'
                    />
                <div className='display-card-text'>
                <Typography.Title level={3}>{item?.submission?.title}</Typography.Title>
                <div style={{display:"flex" , gap:"10px",alignItems:"center"}}>
                 <Avatar src={item?.creator?.pic}/>
                <Typography.Text>{item?.creator?.name?item.creator.name:"Creator"}</Typography.Text>
                </div>
                </div>
             </div>
          </Link>
              )
            } 
          })}
        </div>
    </div>
  )
}

export default CardDisplay
