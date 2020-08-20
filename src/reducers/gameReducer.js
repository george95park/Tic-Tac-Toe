import { UPDATE_BOARD } from '../actions/types';

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case UPDATE_BOARD:
            return {
                ...state,
                board: action.board,
                xIsNext: action.xIsNext
            }
        default:
            return state;
    }
}
