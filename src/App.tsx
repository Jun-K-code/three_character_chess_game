import React, { useState } from 'react';
import { CountCom } from './components/CountCom';

function App() {
    const [num, setNum] = useState<number>(0);
    return (
        <div>
            <CountCom num={num} onChange={(n) => setNum(n)} />
        </div>
    );
}

export default App;
