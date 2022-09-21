import { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { createPost } from "./posts/postsSlice"

export interface formDataType{
    title:string,
    body:string,
    userId:number | null
}
const Form = () => {
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState<formDataType>({
        title:"",
        body:"",
        userId:null

    })
    const handleClick = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFormData(({...formData, [e.target.name]:e.target.value}))
    }
    const saveItem = () => {
        if(formData.body && formData.title && formData.userId){
            const myNumber:string | number = formData.userId
            dispatch(createPost({title:formData.title, body:formData.body, userId:+myNumber}))
        }
    }
  return (
    <div style={{minWidth:"30vw", minHeight:"30vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"10px"}}>
        <input style={{width:"400px", height:"40px"}} onChange={handleClick} type="text" name='title' placeholder='title'/>
        <input style={{width:"400px", height:"40px"}} onChange={handleClick} type="text" name='body' placeholder='body'/>
        <input style={{width:"400px", height:"40px"}} onChange={handleClick} type="number" name='userId' placeholder='userId'/>
        <button onClick={saveItem} style={{width:"410px", height:"40px"}}>ADD</button>
    </div>
  )
}

export default Form