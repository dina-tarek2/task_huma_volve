import { Post } from "../types/post";


export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!response.ok){
        throw new Error('Failed to fetch posts');
    }

    return response.json();
}