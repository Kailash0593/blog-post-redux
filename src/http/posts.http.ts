import type { PostI } from '../interface';
import { url } from './url';

export class PostsHttpClass {
    constructor(){}

    async getAllPost(userId: string): Promise<PostI []> {
        const response = await fetch(url.posts(userId));
        return response.json();
    }

    async getPost(postId: number): Promise<PostI> {
        const response = await fetch(url.post(postId));
        return response.json();
    }

    async deletePost(postId: number):  Promise<PostI> {
        console.log("postId", postId)
        const response = await fetch(`${url.post(postId)}`, {
            method: 'DELETE'
        });
        return response.json();
    }
}