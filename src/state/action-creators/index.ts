import axios from "axios";
import {Action} from '../actions';
import { Dispatch } from "react";
import {ActionType} from '../action-types'

export const searchRepository = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.SEARCH_REPOSITORY
        })

        try {
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            });

            const names = data.objects.map((result: any) => {
                return result.package.name;
            })

            dispatch({
                type: ActionType.SEARCH_REPOSITORY_SUCCESS,
                payload: names
            });

        } catch(err) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORY_ERROR,
                payload: err.message
            });
        }
        
    }
}