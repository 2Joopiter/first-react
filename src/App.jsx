export default function App() {
	// 번수, 함수를 반영하게 넣어줄 수 있음
	const name = ['홍길동', '김영희', '이민호'];
	const age = '21';
	const job = '경찰';
	const cl_Name = 'wrap';

	/*
		JSX문 안쪽에 {}로 가능한 연산이 제한적
		1. 변수 치환
		2. 조건문 (3항연산자, &&연산자)
		3. 반복문 (map)
	*/

	return (
		// 스크립트 주석 가능
		<>
			{/* JSX문 안쪽에서는 주석도 연산이 필요하기 때문에 중괄호 처리 */}
			<section className={cl_Name}>
				<h1>
					안녕하세요. 제 이름은 {name[2]}입니다. 저의 나이는 {age}살 입니다. 저의 직업은 {job}입니다.
				</h1>
			</section>
		</>
	);
}
