import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { API_ROUTES } from "../config/api.config";
import { httpApi } from "../utils/http.api";
import { OperationService } from "../services/operation.service";

const fetchOperations = async ({ pageParam = 0 }) => {
    const { data } = await httpApi.get(`${ API_ROUTES.OPERATIONS_HISTORY }?size=5&page=${ pageParam }`);
    return data;
}

export const useOperation = () => {
    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
                                                                        queryKey: ['operations'],
                                                                        queryFn: fetchOperations,
                                                                        getNextPageParam: (lastPage) => {
                                                                            return !lastPage.last ? lastPage.page + 1 : undefined;
                                                                        }
    });

    const queryClient = useQueryClient();

    const deleteOperation = useMutation({
        mutationFn: OperationService.deleteOperation,
        onSuccess: (_, operationId) => {
            queryClient.setQueryData(['operations'], oldData => {
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
