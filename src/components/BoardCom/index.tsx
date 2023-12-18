import { ChessType } from '../../types/enums';
import { ChessCom } from '../ChessCom';

import './index.css';

interface IProps {
    chesses: ChessType[];
    isGameOver?: boolean;
    onClick?: (index: number) => void;
}
export const BoardCom: React.FC<IProps> = function(props) {
    // 通过类型断言去掉isGameOver上的undefined类型，只保留boolean。
    // const isGameOver = props.isGameOver as boolean; // 写法1
    const isGameOver = props.isGameOver!; // 写法2-非空断言

    const list = props.chesses.map((type, i) => (
        <ChessCom
            key={i}
            type={type}
            onClick={() => {
                // 游戏没有结束的时候，并且传递了onClick这个回调函数，触发
                if (props.onClick && isGameOver) {
                    props.onClick(i);
                }
            }}
        />
    ));

    return <div className="board">{list}</div>;
}

// 添加默认值
BoardCom.defaultProps = {
    isGameOver: false
}