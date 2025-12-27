import type { UserI } from '../interface/user.interface';
import { url } from './url';

export class UserHttpClass {
    constructor(){}

    async getAllUsers(): Promise<UserI []> {
        const response = await fetch(url.users);
        return response.json();
    }

    async getUser(userId: string): Promise<UserI> {
        const response = await fetch(url.user(userId));
        return response.json();
    }
}