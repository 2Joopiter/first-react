import { useState } from 'react';
import './App.scss';

/*
	state관련 주의사항
	1. state값 변경시 해당 값은 무조건 다음 렌더링 사이클에 반영
	2. 위의 특성에 기인해서 특정 숫자값을 증감시킬 때 후위연산자 사용은 절대 안됨
*/

export default function App() {
	const [Index, setIndex] = useState(0);

	return (
		<>
			<button onClick={() => setIndex(Index - 1)}>left</button>
			<button onClick={() => setIndex(Index + 1)}>right</button>
			{/* 이미 호출할 때 1이 더해지거나 빠져있기 때문에 useState의 초기값과 다른 상태에서 랜더링 사이클을 시작함 */}
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
