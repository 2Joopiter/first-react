import { useState } from 'react';
import './App.scss';

export default function App() {
	//state값 변경 순서에 따라 결과화면이 달라지는 경우
	//setIndex에 앞에 --,++가 붙는지 뒤에 붙는지에 따라 달라짐
	let [Index, setIndex] = useState(0);

	return (
		<>
			{/* 이벤트를 발생시켜서 setIndex가 실행이 되는 순간에 값이 0임 (해당값의 초기값이 먼저 활용됨 (setIndex(0)) */}
			<button onClick={() => setIndex(Index--)}>left</button>
			{/* 전위증가연산자라서 setIndex가 실행되는 순간에 바로 초기값을 먼저 증가시켜놓은 뒤 호출되므로 (setIndex(1)) */}
			<button onClick={() => setIndex(++Index)}>right</button>
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
