import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Dashbaord } from './pages/Dashbaord';
import { Users } from './pages/User/Users';
import { Posts } from './pages/Post/Posts';
import { Post } from './pages/Post/Post';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Dashbaord
            },
            {
                path: '/users',
                Component: Users,
            },
            {
                path: '/users/:id/posts',
                Component: Posts
            },
            {
                path: '/users/:id/posts/:postId',
                Component: Post
            }
        ]
    }
], {
    basename: "/blog-post-redux"
});