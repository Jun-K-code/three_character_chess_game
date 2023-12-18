import React, { useState } from 'react';
import { ChessCom } from './components/ChessCom/ChessCom';
import { ChessType } from './types/enums';

function App() {
    return (
        <div>
            <ChessCom type={ChessType.none} onClick={() => {
                console.log("被点击了")
            }}/>
            <ChessCom type={ChessType.red} onClick={() => {
                console.log("被点击了")
            }}/>
            <ChessCom type={ChessType.black} onClick={() => {
                console.log("被点击了")
            }}/>
        </div>
    );
}

export default App;
