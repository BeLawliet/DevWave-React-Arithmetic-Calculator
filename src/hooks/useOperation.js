import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { OperationService } from "../services/operation.service";

export const useOperation = (filters) => {
    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
                                                                        queryKey: ['operations', filters],
                                                                        queryFn: OperationService.getOperationHistory,
                                                                        getNextPageParam: (lastPage) => {
                                                                            return !lastPage.last ? lastPage.page + 1 : undefined;
                                                                        }
    });

    const queryClient = useQueryClient();

    const deleteOperation = useMutation({
        mutationFn: OperationService.deleteOperation,
        onSuccess: (_, operationId) => {
            queryClient.setQueryData(['operations', filters], oldData => {
                if (!oldData) return oldData;

                return {
                    ...oldData,
                    pages: oldData.pages.map(page => ({
                        ...page,
                        content: page.content.filter(op => op.id !== operationId)
                    }))
                }
            })
        }
    });

    return {
        operations: data?.pages?.flatMap(page => page.content) ?? [],
        isLoading,
        hasNextPage,
        fetchNextPage,
        deleteOperation: deleteOperation.mutate
    }
}
