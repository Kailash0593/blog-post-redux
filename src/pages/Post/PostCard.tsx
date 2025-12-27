import { Box, Button, Card, CardActions, CardContent, Divider, Stack, Typography } from "@mui/material";
import type { PostI } from "../../interface";

interface Props {
    post: PostI;
    onSelectPost: (post: PostI) => void;
    onRemovePost: (post: PostI) => void;
    isActive: boolean;
}

export const PostCard = (props: Props) => {
    return (
        <>
            <Card>
                <CardContent className="p-2!">
                    <Box>
                        <Typography className="pb-2 text-xl">{props.post.title.length > 40 ? props.post.title.substring(0, 40) + '...' : props.post.title}</Typography>
                    </Box>
                    <Divider />
                    <Box>
                        <Typography className="pt-1 text-sm">{props.post.body.length > 30 ? props.post.body.substring(0, 50) + '...' : props.post.body}</Typography>
                    </Box>
                </CardContent>
                <CardActions disableSpacing sx={{ justifyContent: 'flex-end' }}>
                    <Stack direction={"row"} sx={{ gap: 1 }}>
                        <Button variant="outlined" size="small" color="error" onClick={() => props.onRemovePost(props.post)} sx={{
                            textTransform: "capitalize"
                        }}>remove</Button>
                        <Button variant="contained" size="small" onClick={() => props.onSelectPost(props.post)} sx={{
                            textTransform: "capitalize"
                        }}>view</Button>
                    </Stack>
                </CardActions>
            </Card>
        </>
    )
}
