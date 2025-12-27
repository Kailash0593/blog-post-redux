import { useNavigate, useParams } from "react-router";
import { asyncDeletePost, asyncGetAllPosts, usePostSelector } from "../../store/posts";
import type { PostI, UserI } from "../../interface";
import type React from "react";
import { Alert, IconButton } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { PostCard } from "./PostCard";
import { asyncGetUser, useUserSelector } from "../../store/users";

export const Posts = () => {
  const { id } = useParams<{ id: string }>()!;
  const postSelector = usePostSelector();
  const userSelector = useUserSelector();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  let postNode: React.ReactNode;
  let userNode: React.ReactNode = <></>;
  let posts: PostI[] = [];
  let postsState = postSelector.getState();
  let user: undefined | UserI;

  const getAllPosts = () => {
    if (id) {
      dispatch(asyncGetAllPosts(id));
    }
  }

  const onHandleTryAgain = () => {
    getAllPosts();
  }

  const onSelectPost = (post: PostI) => {
    navigate(`${post.id}`);
  }

  const onRemovePost = (post: PostI) => {
    dispatch(asyncDeletePost(post.id));
  }

  useEffect(() => {
    if (id && posts.length === 0) {
      getAllPosts();
      user = userSelector.getUser();
      if(!user){
        dispatch(asyncGetUser(id));
      }
    }
  }, []);

  if (id) {
    posts = postSelector.getAllPosts(parseInt(id));
    user = userSelector.getUser();
    userNode = (
      <h2 className="md:text-3xl text-[24px] py-2">Checkout the latest post by - {user?.name}</h2>
    )
  
    const noPosts = (
      <>
      <div className='absolute top-1/2 left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1>It's seems there are no post for the selected user.</h1>
        <IconButton onClick={onHandleTryAgain} color="primary" aria-label="add to shopping cart" size='large'>
          <RefreshIcon />
        </IconButton>
      </div>
      </>
    )

    const postCards = (
      <div className='grid md:grid-cols-2 max-sm:grid-cols-1 gap-4 my-2'>
        {
          posts.map(p => (
            <PostCard key={p.id} isActive={false} post={p} onSelectPost={onSelectPost} onRemovePost={onRemovePost} ></PostCard>
          ))
        }
      </div>
    )

    const allPosts = (
      posts.length === 0 ? noPosts : postCards
    )

    const loadingNode = (
      <div className='absolute top-1/2 left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2'>Loading...</div>
    );

    const tryAgainNode = (
      <div className='absolute top-1/2 left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1>Something went wrong please try again...</h1>
        <IconButton onClick={onHandleTryAgain} color="primary" aria-label="add to shopping cart" size='large'>
          <RefreshIcon />
        </IconButton>
      </div>
    )

    postNode = postsState === "pending" ? loadingNode : postsState === "error" ? tryAgainNode : allPosts;
  } else {
    postNode = <></>
  }

  return (
    <>
      <div className='p-2 h-full'>
        <Alert severity="warning">Heads up! Deleting a post removes it from the UI and Redux store, but not from the mock server. A hard refresh may bring it back 🙂</Alert>
        {userNode}
        {postNode}
      </div>
    </>
  )
}
