function App() {
	return (
		<>
			<div className='App'>
				<h2>World</h2>
			</div>
			<div className='box'></div>
		</>
	);
}

export default App;

// 컴포넌트 함수의 필수조건
// 1. 무조건 함수명을 대문자로 시작함
// 2. 무조건 JSX를 리턴해야 함
// 3. 하나의 컴포넌트 함수는 복수개의 JSX 요소를 리턴할 수 없음.
// 4. 복수개의 요소를 내보내고 싶을 때는 상위요소로 wrapping 처리를 한번 더 해줌
// 5. 상위 태그를 불필요하게 만들기 싫으면 태그명이 없는 빈 꺾쇄로 감싸줌 (Fragment) > 배열로 묶어주는 것과 비슷한 기능
// 6. JSX는 기본적으로 자바스크립트 문법이기 때문에 예약어 명령어를 쓸 수 없음 (class=>className)

// JSX: 리액트에서 전용으로 쓰이는 돔 생성 문법
// 원래는 React.createElement()라는 메서드를 이용해서 복잡하게 구성해야 되는 로직을 HTML 태그를 따라한 친화적인 문법으로 편하게 돔을 생성하게 만들어주는 리액트만의 문법 체계
