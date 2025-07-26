import { useState } from "react";

export const useLoading = (defaultDelay = 3000) => {
    const [ isLoading, setIsLoading ] = useState(false);

    const runWithLoader = async (action, delay = defaultDelay) => {
        setIsLoading(true);

        try {
            await Promise.all([
                action(),
                new Promise(resolve => setTimeout(resolve, delay))
            ]);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        runWithLoader
    }
}
