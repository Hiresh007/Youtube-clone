import React ,{useState}from 'react'
import { Card,Avatar } from 'antd'
import { useStateContext } from '../state/StateContext';
import './home.css'
import {Link} from "react-router-dom";
const {Meta} = Card
const Cards = ({item }) => {
  const {postID,setID} = useStateContext()
  const [isHovered, setIsHovered] = useState(false);       
      const handleMouseEnter = () => {
        setIsHovered(true);
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
      };
  return (
    <Link to="/video">
    <Card onClick={() => setID(item.postId)}
    style={{ width:300, margin:"8px", borderRadius:'2em'}}
    hoverable
    cover = {
      <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      {isHovered ? (
        <video
        src={item?.submission?.mediaUrl}
        autoPlay
        loop
        controls
        style={{ width: '100%', height:'400px' }}
        />
        ) : (
          <img
          src={item?.submission?.thumbnail}
          alt="Video Poster"
          style={{ width: '100%', height:"400px",objectFit:"cover",borderRadius:'2em 2em 0 0' }}
          />
          )}
    </div>
    }
    >
    <Meta
      avatar = {<Avatar src = {item?.creator?.pic}/>}
      title={item?.submission?.title}
      description= {item?.creator?.name?item.creator.name:"Creator"}
      />
  </Card>
</Link>
  )
}

export default Cards
