// A mock function to mimic making an async request for data

import axios from "axios"
import { PostType, ResponseType } from "./postsSlice"




export function fetchPosts() {
  const response = axios.get<ResponseType>('https://jsonplaceholder.typicode.com/posts')
  return response
}

export function fetchPost(id:number) {
  const response = axios.get<ResponseType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response
}

export function newPost(title:string, body:string, userId:number) {
  if(!title || !body || !userId) return
  const response = axios.post<PostType>(`https://jsonplaceholder.typicode.com/posts`, {
    title,
    body,
    userId,
  })
  return response
}