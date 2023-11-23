import { useRef } from 'react';
import './App.scss';

// useRef에서 알아야 되는 사항 핵심정리
// 1. DOM 참조객체에 담는 법
// 1-1. const 변수명 = useRef(null); -> 돔을 담을 빈 참조객체 생성
// 1-2. <div ref={변수명}></div> -> 원하는 JS 요소에 참조객체 연결
// 1-3. 변수명.current.style~  -> 참조객체에 담겨있는 DOM 호출

// 2. 모션작업시 화면 재랜더링 하지 않으면서 수치값 변경하는 방법
// 2-1. const num = useRef(초기수치);
// 2-2. num.current = 변경할 수치값

export default function App() {
	const num = useRef(0);
	const refBox = useRef(null);

	const rotation = (count) => {
		refBox.current.style.transform = `rotate(${count * 45}deg)`;
	};

	return (
		<>
			<button onClick={() => rotation(--num.current)}>left</button>
			<button onClick={() => rotation(++num.current)}>right</button>

			<div ref={refBox} className='box'></div>
		</>
	);
}
