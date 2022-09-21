import { Link, useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

const AboutPost = () => {
  const {id} = useParams()
  const {post, error, loading} = useAppSelector(state => state.posts)
  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading...</h1>
  if(!post) return <span>Posts not Found</span>
  return (
    <>
     <Link state={{textDecoration:"none"}} to={'/'}>Back</Link>
    <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", color:"black"}}>
     
      <div style={{maxWidth:"550px", maxHeight:"300px", border:"1px solid", boxShadow:"2px 2px", backgroundColor:"lightgrey", textAlign:"center"}}>
        <span>{post.title}</span>
        <p>{post.body}</p>

      </div>
    </div>
    </>
  )
}

export default AboutPost