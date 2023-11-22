import Modal from './modal/Modal';
import { useState } from 'react';

export default function App() {
	const Colors = ['gold', 'cornflowerblue', 'plum', 'seagreen', 'crimson'];
	const [IsOpen, setIsOpen] = useState(false);

	/*
	자주쓰는 패턴 (정보값을 토대로 반복 가상돔 생성)
	1. return문 안쪽에서 {} 생성
	2. 중괄호 안쪽에서 배열 state.map((반복 데이터, 순서))=>{
		return
	]
	*/

	const [Clr, setClr] = useState(Colors);
	const [Color, setColor] = useState('black');

	return (
		<>
			{Clr.map((data, idx) => {
				return (
					<button key={data + idx} onClick={() => setColor(data)}>
						{data}
					</button>
				);
			})}

			<h1 style={{ color: Color }}>부모 컴포넌트</h1>

			<button onClick={() => setIsOpen(!IsOpen)}>{IsOpen ? '팝업 닫기' : '팝업 열기'}</button>
			{IsOpen && <Modal />}
		</>
	);
}
