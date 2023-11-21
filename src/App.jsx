export default function App() {
	// 번수, 함수를 반영하게 넣어줄 수 있음
	const name = ['홍길동', '김영희', '이민호'];
	const job = '경찰';
	const cl_Name = 'wrap';

	const changeButton = (e, txt) => {
		e.target.innerText = txt;
	};

	return (
		<>
			<section className={cl_Name}>
				<h1>
					안녕하세요. 제 이름은 {name[2]}입니다. 저의 직업은 {job}입니다.
				</h1>
				<button onClick={(e) => changeButton(e, '버튼2')}>버튼</button>
			</section>
		</>
	);
}
