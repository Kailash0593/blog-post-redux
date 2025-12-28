import { Box, Card, CardContent, Divider, IconButton, Paper, Typography } from "@mui/material";
import type { CommentI, PostI, UserI } from "../../interface";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";
import { asyncGetAllComments, asyncCreateComment, useCommentSelector } from "../../store";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import RefreshIcon from '@mui/icons-material/Refresh';

interface Props {
    post: PostI;
    user: UserI | undefined
}

export const FullPostCard = (props: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const commentSelector = useCommentSelector()
    let commentsState = commentSelector.getState();
    let comments: CommentI[] = commentSelector.getAllComments(props.post.id);

    const getAllComments = () => {
        if (props.post.id) {
            dispatch(asyncGetAllComments(props.post.id));
        }
    }

    const onHandleTryAgain = () => {
        getAllComments();
    }

    const onFormSubmit = (comment: CommentI) => {
        console.log("comment", comment);
        dispatch(asyncCreateComment(comment));
    }

    const noComments = (
        <>
            <div className='absolute top-1/2 left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1>It's seems there are no comments for the selected post.</h1>
                <IconButton onClick={onHandleTryAgain} color="primary" aria-label="add to shopping cart" size='large'>
                    <RefreshIcon />
                </IconButton>
            </div>
        </>
    )



    const loadingNode = (
        <div className='w-full text-center'>Loading...</div>
    );

    const tryAgainNode = (
        <div className='w-full text-center'>
            <h1>Something went wrong please try again...</h1>
            <IconButton onClick={onHandleTryAgain} color="primary" aria-label="add to shopping cart" size='large'>
                <RefreshIcon />
            </IconButton>
        </div>
    )

    const allComments = (
        comments.length === 0 ? noComments : comments.map(c => (
            <CommentCard key={c.id} comment={c} ></CommentCard>
        ))
    )

    const commentNode = (
        // <div className='grid gap-4 my-2'>
        <Paper elevation={0} className="bg-gray-100! w-full! p-2">
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <CommentForm onFormSubmit={onFormSubmit} postId={props.post.id}></CommentForm>
                <Typography className="text-2xl!" >Comments</Typography>
                {
                    commentsState === "pending" ? loadingNode : commentsState === "error" ? tryAgainNode : allComments
                }
            </Box>
        </Paper>
        // </div>
    )

    useEffect(() => {
        if (comments.length === 0) {
            getAllComments();
        }
    }, [])

    return (
        <>
            <Card elevation={2}>
                <CardContent className="p-2!">
                    <Box>
                        <Typography className="p-2 text-sm!">Author - {props.user?.name}</Typography>
                    </Box>
                    <Box>
                        <Typography className="p-2 text-2xl!">{props.post.title}</Typography>
                    </Box>
                    <Divider />
                    <Box>
                        <Typography className="p-2 text-sm">{props.post.body}</Typography>
                    </Box>
                    <Box>
                        {commentNode}
                        {/* {commentsState === "pending" ? loadingNode : commentsState === "error" ? tryAgainNode : allComments} */}
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}
