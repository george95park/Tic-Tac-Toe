import React from 'react';
import Square from './Square.js';
import { connect } from 'react-redux';
import { updateBoard } from '../actions/gameActions';

class Board extends React.Component {
    handleClick(i) {
        const board = this.props.board.slice();
        if (this.calculateWinner(board) || board[i]) {
            return;
        }
        this.props.updateBoard(this.props.board, this.props.xIsNext, i);
    }

    renderSquare(i) {
        return (
            <Square
            value={this.props.board[i]}
            onClick={() => this.handleClick(i)}
            />
        )
    }
    calculateWinner(board) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }
    render() {
        const winner = this.calculateWinner(this.props.board);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    board: state.game.board,
    xIsNext: state.game.xIsNext
});

export default connect(mapStateToProps, { updateBoard })(Board);
