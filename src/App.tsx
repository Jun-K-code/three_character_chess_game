import React from 'react';

import { ChessType } from './types/enums';
import { BoardCom } from './components/BoardCom';

const chesses: ChessType[] = [
    ChessType.black,
    ChessType.red,
    ChessType.none,
    ChessType.none,
    ChessType.black,
    ChessType.red,
    ChessType.black,
    ChessType.red,
    ChessType.black,
];
function App() {
    return (
        <div>
            <BoardCom chesses={chesses} isGameOver={true} onClick={(i) => console.log(i)} />
        </div>
    );
}

export default App;
