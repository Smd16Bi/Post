import { useMemo } from "react"

export const useSorterdPost = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => { return a[sort].localeCompare(b[sort]) })
        } else {
            return posts
        }
    }, [sort, posts]);

    return sortedPost
}


export const usePosts = (posts, sort, query) => {
    const sortedPost = useSorterdPost(posts, sort)
    const sortedAndSerchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

    }, [query, sortedPost]);
    return sortedAndSerchedPosts
}