import Modal from './modal/Modal';

export default function App() {
	console.log('app re-rendered');
	let isOpen = true;

	const handleModal = () => {
		isOpen = false;
	};
	return (
		<>
			<h1>부모 컴포넌트</h1>
			<button onClick={handleModal}>모달 토글</button>
			{isOpen && <Modal />}
		</>
	);
}

/*
	react에서 화면 렌더링에 관여하는 중요한 정보값을 state로 관리하고 해당 state를 전용함수로만 변경해야 하는 이유
	-화면의 변화를 담당하는 정보값은 중요한 정보값이므로 쉽게 변경이 가능하면 안되기 때문에 쉽게 변경하지 못하도록 미리 약속된 규약에 의해서만 변경할 수 있도록 강제화 하는 것
	- 화면의 변경을 담당하는 중요한 정보값은 무조건 state에 담기도록 강제되어 있으므로 추후 유지보수시 개발자는 state값만 관리하면 되기 때문에 프로젝트 유지보수 효율성이 올라감(편해짐)

	-리액트는 state가 변경되어야지만 해당 내용의 변경점을 인식해서 재호출함

*/
