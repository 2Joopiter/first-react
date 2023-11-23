import { useRef, useState } from 'react';
import './App.scss';

//useRef는 해당 렌더링사이클에 바로 변경사항 반영
//state는 다음번 렌더링 사이클에 변경사항 반영

export default function App() {
	console.log('render');
	let num1 = useRef(0);
	const [Num2, setNum2] = useState(0);

	const handleClick = () => {
		num1.current++;
		setNum2(Num2 + 1);
		console.log('num1', num1.current);
		console.log('num2', Num2);
	};

	return (
		<>
			<button onClick={ handleClick }>버튼</button>
		</>
	);
}
