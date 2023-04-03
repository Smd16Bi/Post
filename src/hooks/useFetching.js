import { useState } from "react";

export const useFething = (callback) => {
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const [error, setError] = useState("");
    const fetching = async (...args) => {
        try {
            setIsPostsLoading(true);
            await callback(...args)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsPostsLoading(false)
        }
    }

    return [fetching, isPostsLoading, error];
}