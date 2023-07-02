import React,{useEffect,useState} from 'react'
import { getDocs ,collection, deleteDoc,doc} from "firebase/firestore";
import { AiFillDelete } from "react-icons/ai";
import { db, auth } from "../firebase-config";

const Home = ({isAuth}) => {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    const getPosts = async () => {
        try {
          const data = await getDocs(postsCollectionRef);
          setPostList(
            data.docs.map((post) => ({
              ...post.data(),
              id: post.id,
            }))
          );
        } catch (err) {
          console.log(err);
        }
      };

    // const getPosts = async () => {
    //     const data = await getDocs(postsCollectionRef);
    //     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   };
    const deletePost =async (id)=>{
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        getPosts();
    }
    useEffect(() => {
        getPosts();
      }, []);
    // useEffect(()=>{
    //     const getPosts = async () => {
    //         const data = await getDocs(postsCollectionRef);
    //         setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
    //     };
    //     getPosts();
    // });
   
  return (
    <div className='homePage'>{postLists.map((post) => {
        return <div className='post'><div className='postHeader'>
        <div className='title'>
        <h1>{post.title}</h1></div>
        <div className='deletePost'>
        {isAuth && post.author.id === auth.currentUser.uid && (
            <button onClick={() =>{
                deletePost(post.id)
            }}> <AiFillDelete/></button>
        )}
       
        </div>
        </div>
        <div>
        </div>
        <div className='postTextContainer'>{post.postText}</div>
        <h3>@{post.author.name}</h3>
        </div>
    })}</div>
  )
}

export default Home