import React,{ useState } from "react"
import { Link } from "react-router-dom"
import { PostType } from "./postsSlice"
export interface PropsType{
  post:PostType
  // onClick: () => void;
}
const Post:React.FC<PropsType> = ({post})=> {
  const [color, setColor] = useState("lightgray")
    
  return (
    <>
    <Link style={{textDecoration:"none"}} to={`${post.id}`}>
        <div 
        onMouseLeave={() => {
          setColor("lightgray")
        }} 
        onMouseEnter={() => {
          setColor("gray")
        }} 
        
        style={{
          color:"black",
          padding:'10px',
          backgroundColor:color,
          border:"1px solid black",
          cursor:"pointer",
          textAlign:"center",
          margin:'3px'
        }}>   

            <span title={post.body}> 
            {post?.title}</span>

        </div>
      </Link>
    </>
  )
}

export default Post