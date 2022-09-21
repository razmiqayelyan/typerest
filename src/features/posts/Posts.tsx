import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Form from '../Form';
import Post from './Post';
import { allPosts, PostsState, PostType, singlePost } from './postsSlice';





const Posts = () => {
    const dispatch = useAppDispatch()
    const {posts, loading, error} = useAppSelector<PostsState>(state => state.posts)
    useEffect(() => {
        dispatch(allPosts())
    }, [dispatch])
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error...</h1>

    const getElems = (elems:PostType[]) => {
        return elems.map((post:PostType) => {
            return (
                <div  key={post.id}  onClick={() => dispatch(singlePost(post.id))}>
                    <Post post={post} />
                </div>
            )
        })
    } 
  return (
    <>
     <Form/>
    <div>   
        {getElems(posts)}
    </div>
    </>
  )
}

export default Posts