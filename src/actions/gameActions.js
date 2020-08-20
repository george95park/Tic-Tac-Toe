import { UPDATE_BOARD } from './types';

export const updateBoard = (board, xIsNext, i) => dispatch => {
    let copyBoard = [...board];
    copyBoard[i] = xIsNext ? 'X' : 'O';
    dispatch({
        type: UPDATE_BOARD,
        board: copyBoard,
        xIsNext: !xIsNext
    });
}
