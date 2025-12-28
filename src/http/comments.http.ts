import type { CommentI } from '../interface';
import { url } from './url';

export class CommentsHttpClass {
    constructor() { }

    async getAllComments(postId: number): Promise<CommentI[]> {
        const response = await fetch(url.comments(postId));
        return response.json();
    }

    async createComment(comment: CommentI): Promise<CommentI> {
        const response = await fetch(url.comment, {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return response.json();
    }
}