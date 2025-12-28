import { Card, CardContent, Box, Avatar, Typography } from "@mui/material"
import type { CommentI } from "../../interface"

interface Props {
    comment: CommentI
}

export const CommentCard = (props: Props) => {
    return (
        <Card>
            <CardContent className="py-2! px-3!">
                <Box display="flex" alignItems="flex-start" gap={2}>
                    <Avatar
                        alt={props.comment.name}  
                    />
                    <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                            {props.comment.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 0.5 }}
                        >
                            {props.comment.body}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}
