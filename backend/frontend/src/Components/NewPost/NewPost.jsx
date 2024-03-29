import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import "./NewPost.css"
import { createNewPost } from '../../Actions/Post';
import { loadUser } from '../../Actions/User';


const NewPost = () => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const { loading, error, message } = useSelector((state) => state.like)
    const dispatch = useDispatch();
    const alert = useAlert();
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            const Reader = new FileReader();
            Reader.readAsDataURL(file);
            Reader.onload = () => {
                if (Reader.readyState === 2) {
                    setImage(Reader.result)
                }
            }
        }






        // const file = event.target.files?.[0];

        // if (file) {
        //     setSelectedImage(file);
        //     const reader = new FileReader();

        //     reader.onload = (event) => {
        //         const result = event.target?.result;
        //         if (result) {
        //             setShowImage(result as string);
        //         }
        //     };

        //     reader.readAsDataURL(file);
        // }





    }
    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(createNewPost(caption, image));
        dispatch(loadUser());
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "clearErrors" })
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "clearMessage" })
        }
    }, [dispatch, error, message, alert])

    return (
        <div className='newPost'>
            <form className='newPostForm' onSubmit={submitHandler}>
                <Typography variant='h3'>New Post</Typography>
                {image && <img src={image} alt="post" />}
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <input type='text' placeholder='Caption...' value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                ></input>
                <Button disabled={loading} type='submit'>Post</Button>
            </form>
        </div>
    )
}

export default NewPost
