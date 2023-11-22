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

	const [DB, setDB] = useState(Colors);
	// DB-화면에 동적으로 배열의 색상값을 토대로 반복 출력하기 위한 정보값. 해당 이름으로 버튼명을 생성하기 위한 정보값
	const [Color, setColor] = useState('black');
	// 이미 생성된 돔에 이벤트 발생시 해당 값을 변경하기 위한 State. 해당 버튼에 있는 문자값을 가져와서 실제 h1의 색상값을 변경하기 위한 정보값

	return (
		<>
			{DB.map((data, idx) => {
				return (
					<button key={data + idx} onClick={() => setColor(data)}>
						{/* 여기서 onclick이 없으면 Color State는 없어도 됨. 하지만 색상 변경이 필요하기 때문에 Color State가 추가됨*/}
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
