import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import { axiosInstance } from "../../utils/axios";
const PostDetail = () => {
    const router = useRouter();
    const [post, setPost] = useState(null);
    const {post_id} = router.query;
    useEffect(() => {
        const fetchPost = async () => {
            try {
                let fetchedPost = await axiosInstance.get(`/posts/${post_id}`)
                if(fetchedPost) setPost(fetchedPost?.data)
                else setPost(null)
            } catch(error) {
                console.log('error', error.message)
            }
        }
        if(post_id) fetchPost()
        
    }, [post_id])
    console.log('post', post)
    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </div>
    )
}
export default PostDetail;