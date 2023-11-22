import { useState } from 'react';
import './App.scss';

export default function App() {
	//state값 변경 순서에 따라 결과화면이 달라지는 경우
	//setIndex에 앞에 --,++가 붙는지 뒤에 붙는지에 따라 달라짐
	let [Index, setIndex] = useState(0);

	return (
		<>
			<button onClick={() => setIndex(--Index)}>left</button>
			<button onClick={() => setIndex(++Index)}>right</button>
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
