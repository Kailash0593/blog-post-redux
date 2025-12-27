const base = "https://jsonplaceholder.typicode.com"

export const url = {
    users: `${base}/users`,
    user: (userId: string) =>  `${base}/users/${userId}`,
    posts: (userId: string) =>  `${base}/users/${userId}/posts`,
    post: (postId: number) =>  `${base}/posts/${postId}`
}