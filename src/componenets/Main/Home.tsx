import {getDocs,collection} from "firebase/firestore"
import { db } from "../../Config/config";
import { useEffect, useState } from "react";
import { UserPosts } from "./postsInMain";
import { auth } from "../../Config/config" 
import {useAuthState} from "react-firebase-hooks/auth"
export interface postInterface{
    username:string;
    discription:string;
    title:string;
    id:string;

}

export const Home =()=>{
    const [user]=useAuthState(auth)
    const RefPosts= collection(db,'posts');
    const [postList, setPostList]=useState<postInterface[] |null>(null);

    const getPosts = async() =>{
        const posts =await getDocs(RefPosts);
         setPostList(posts.docs.map((doc)=>({ ...doc.data(),id:doc.id}))as postInterface[]) ;

        
    }
    useEffect(()=>{
        getPosts();
    })
    
    
    return (
            <div>
            {
                postList?.map((post)=>(<UserPosts userPost={post}/>))}
             </div>
        
    
    )
}
