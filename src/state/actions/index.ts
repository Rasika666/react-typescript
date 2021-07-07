import {ActionType} from '../action-types';

interface SearchRepositoryAction {
    type: ActionType.SEARCH_REPOSITORY;
}

interface SearchRepositorySuccessAction {
    type: ActionType.SEARCH_REPOSITORY_SUCCESS,
    payload: string[]
}

interface SearchRepositoryErrorAction {
    type: ActionType.SEARCH_REPOSITORY_ERROR,
    payload: string
}

export type Action = 
SearchRepositoryAction |
SearchRepositorySuccessAction |
SearchRepositoryErrorAction
