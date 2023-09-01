import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {addDoc,collection} from "firebase/firestore"
import {  db} from "../Config/config";
import { auth } from "../Config/config" 
import {useAuthState} from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";

interface CreateForm{
    title:string;
    discription:string;
}

export const  Createform =()=>{
    const Navigate=useNavigate();
    
    const [user]=useAuthState(auth)
   
    const shema=yup.object().shape({
        title:yup.string().required("title is required"),
        discription:yup.string().required("description is required")
    });

    const {register,handleSubmit,formState:{errors}}=useForm<CreateForm>({
        resolver:yupResolver(shema)


    })
    const RefPosts= collection(db,'posts');
    const submitForm= async(data:CreateForm)=>{
        await addDoc(RefPosts,{
            ...data,
            username:user?.displayName,
            id:user?.uid
      
        } )
        Navigate('/');
    }
    return (
        <div>
            <h1>Create Posts</h1>
            <form className="form-container" onSubmit={handleSubmit(submitForm)}>
                <input className="form-input" type="text" placeholder="title.." {...register('title')}/>
                <p className="error-message">{errors.title?.message}</p>
            
                <textarea className="form-textarea" placeholder="description ..."{...register('discription')}/>
                <p  className="error-message">{errors.discription?.message}</p>
                
                
                <input className="submit-button" type="submit"/>
            </form>
        </div>
    )

}

