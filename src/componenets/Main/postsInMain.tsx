import { auth, db } from "../../Config/config" ;
import {useAuthState} from "react-firebase-hooks/auth"


import {postInterface} from "./Home"
import { addDoc, collection , query,where,getDocs,deleteDoc, doc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { boolean } from "yup";


interface Props{
    userPost:postInterface;
}

interface Likes{
    userId:string;
    docId:string;
}

export const UserPosts = (props: Props) =>{
   

    const [userLike,setUserLike]=useState<Likes[] | null>(null)
    const [isLike,setIsLike]=useState(false);
   
    const {userPost}=props;
    const [user]=useAuthState(auth);
    
    const Reflikes= collection(db,'likes');
    
        const check=async()=>{
            const data= await getDocs(query(Reflikes,where("PostId","==",userPost.id),where("userId","==",user?.uid))) 
           
            return data.docs;
        }
        
        
   
    const addLikes= async() =>{
        const resultOfChecking = await check();
        console.log( resultOfChecking)
            if( resultOfChecking.length>0){
                setIsLike(!isLike);
                    console.log('already exist')
            }
            else{
                try {
                    await addDoc(Reflikes,{
                        userId:user?.uid,
                        PostId:userPost.id
                    } )
                    console.log('Like added');
                    setIsLike(!isLike)
                    
                } catch (error) {
                    console.log(error);
                    
                }
                
            }
     
    }
    const RemoveLike= async() =>{
     
        try {
            const resultOfChecking = await check();
            const ToDeleteLike=doc(db,"likes",resultOfChecking[0].id)
            const deleteLikes= await deleteDoc(ToDeleteLike);
            setIsLike(!isLike);
            
        } catch (error) {
            console.log(error);
        }
    }
  
    const data_likes =query(Reflikes,where("PostId","==",userPost.id))
    const DocLikes= async()=>{
        const dataDocLikes=await getDocs(data_likes);
   
        setUserLike(dataDocLikes.docs.map((doc)=>({userId:doc.data().userId,docId:doc.id})));

    }
    
  
    const deletePost = async (id:string) => {
        console.log(id);
        const ToDeletePost=doc(db,"posts",id)
        await deleteDoc(ToDeletePost);
        await RemoveLike();


    }
    useEffect(()=>{
        DocLikes();
        
    })
        
    return (
        <div className="box-container">
            <div className="profile-img">
               
            </div>

            <div className="box">
                 <button onClick={()=>deletePost(userPost?.id)} className="delete-button">❌</button>
                <h3>{userPost?.title}</h3>
                <p>{userPost?.discription}</p>
                <div className="like-actions">
                    <button
                        onClick={isLike ? RemoveLike : addLikes}
                        className={`like-button ${isLike ? 'unlike' : 'like'}`}
                    >
                        {isLike ? 'Unlike' : 'Like'}
                    </button>
                    <p className="green">{userLike?.length}</p>
                </div>
               
                <p>@{userPost?.username}</p>
            </div>
        </div>
    );
};

