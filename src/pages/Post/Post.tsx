import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import type { PostI, UserI } from "../../interface";
import { usePostSelector, useUserSelector, asyncGetUser, asyncGetPost } from "../../store";
import { useEffect } from "react";
import { Alert } from "@mui/material";
import { FullPostCard } from "./FullPostCard";

export const Post = () => {
  const { id, postId } = useParams<{ id: string; postId: string }>()!;
  const postSelector = usePostSelector();
  const userSelector = useUserSelector();
  
  const dispatch = useDispatch<AppDispatch>();
  let postNode: React.ReactNode = <></>;
  let user: undefined | UserI;
  let post: undefined | PostI;
 
  useEffect(() => {
    if (id && postId) {
      user = userSelector.getUser();
      post = postSelector.getPost();
      if (!user) {
        dispatch(asyncGetUser(id));
      }
      if (!post) {
        dispatch(asyncGetPost(parseInt(postId)));
      }
    }
   
  }, []);

  if (id && postId) {
    user = userSelector.getUser();
    post = postSelector.getPost();

    postNode = (
      post && <FullPostCard post={post} user={user}></FullPostCard>
    )
  }

  return (
    <div className='p-2 h-full'>
      <Alert className="mb-2!" severity="warning">Heads up! Adding a comment to post updates the UI and Redux store, but it isn’t persisted on the mock server. A hard refresh may remove it 🙂</Alert>
      {postNode}
    </div>
  )
}
