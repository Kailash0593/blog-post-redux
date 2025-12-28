const base = "https://jsonplaceholder.typicode.com"

export const url = {
    users: `${base}/users`,
    comment: `${base}/comments`,
    user: (userId: string) =>  `${base}/users/${userId}`,
    posts: (userId: string) =>  `${base}/users/${userId}/posts`,
    post: (postId: number) =>  `${base}/posts/${postId}`,
    comments: (postId: number) =>  `${base}/posts/${postId}/comments`
}