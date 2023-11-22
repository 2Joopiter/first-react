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
	library vs framework
	-library (react, jQuery): 자주 쓰는 편의기능의 문법만 함수형태로 따로 준비되어 있는 구조. 필요한걸 가져와서 쓰면 되므로 코드의 응용범위가 넓은 대신 직접 코드를 조합해서 로직을 만들어야 하므로 개발자의 역량에 따라 난이도가 있음
	-framework (vue, angular, next): 모든 시스템 틀을 강제해서 framework만의 고유 문법을 활용해야만 개발 가능하기 때문에 그 문법을 가져다 쓰기만 하면 되므로 작업자의 개입이 적어져서 코드 난이도는 쉬워지지만 응용 범위가 적어짐

	react에서의 hook 개념 (16버전에서 새로 생김. 이전까지는 객체지향의 class 기반이었음)
		-리액트에서 많이 쓰는 기능들을 함수 형태로 모은 기능모음집(리액트 기반의 필수 내장 플러그인)
		-리액트 hook의 기본 convention(규약, 약속, 정해진 규칙)
			1. 함수 이름의 시작을 use로 해야 함
			2. return값을 내보냄
			3. JSX를 제외한 함수나 리턴값 등을 내보냄
			4. hook은 핸들러함수안쪽, 또다른 hook 안에서 호출 불가
			5. 무조건 컴포넌트 함수의 상위 루트단에서만 호출가능

	react에서 가장 많이 쓰이는 기본 hook 3대장
		- useState: 화면의 재랜더링을 담당하는 중요한 정보값을 담은 그릇을 생성 및 관리
		- useEffect: 해당 컴포넌트의 생명주기(Life cycle)를 관리하기 위함
		- useRef: 화면의 재랜더링을 유발하지 않으면서 특정 값을 관리하거나 가상돔이 아닌 리얼돔을 직접 선택해야 될 때

	사용자가 필요에 의해 직접 등록하는 hook(custom hook)
		- 내장된 hook이 아닌 사용자가 직접 만드는 hook
		- 규칙은 기존 hook과 동일
*/
