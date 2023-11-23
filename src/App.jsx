import { useState } from 'react';
import Modal from './modal/Modal';

/*
	state관련 주의사항
	1. state값 변경시 해당 값은 무조건 다음 렌더링 사이클에 반영
	2. 위의 특성에 기인해서 특정 숫자값을 증감시킬 때 후위연산자 사용은 절대 안됨
*/

export default function App() {
	const [Open, setOpen] = useState(false);

	return (
		<>
			<h1>Parent</h1>
			<button onClick={() => setOpen(true)}>open</button>
			{Open && <Modal setOpen={setOpen} />}
		</>
	);
}
