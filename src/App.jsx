import { useState } from 'react';

export default function App() {
	// 리액트에서는 특정 DOM(가상DOM)요소 선택시 가급적 document.querySelector 사용을 지양.
	// 리액트 구조상 document.querySelector는 현재 작업하고 있는 최신 가상돔이 아닌 이미 한번 리얼돔으로 변환된 예전 돔을 찾는 것이기 때문에 DOM 요소의 신뢰성(최신성)이 떨어짐

	let num = 0;
	// 직접 변수값을 변경해도 화면의 변경은 일어나지만 이 변경사항은 리액트의 제어에서 벗어나있음 => 일반적인 DOM의 구조가 변경되는 것일 뿐임
	// 굳이 번거롭게 일반변수가 아닌 state를 가지고 화면을 제어하도록 강제시키는 이유는?
	// 리액트에서 관리해야 하는 중요한 데이터와 중요하지 않은 데이터를 구분하기 위함
	// 중요한 데이터는 state에 담아주기. 

	/* 
	리액트에서의 re-render, re-paint
		-re-render: 해당 컴포넌트를 재호출
		-re-paint: 컴포넌트 재호출시 화면 출력의 변화를 담당하는 중요한 정보값을 인지하면 화면을 다시 그리면서 DOM 구조를 바꾸는 행위
		
		리액트에서 re-render는 다음의 2 경우에만 발생
		1. state라는 정보값이 변경되거나
		2. 물리적으로 JSX의 구조가 변경되거나

		컴포넌트: 여러개의 함수를 모아 하나의 특정 기능을 수행하도록 만든 작은 기능적 단위. 모듈.

		지금 상황에서 재호출이 안 되는 이유: re-render가 안 일어나고 있기 때문 (이벤트 발생시 state의 정보값을 변경하는 것이 아닌 일반 변수의 값을 변경하고 있기 때문에 react의 입장에서는 해당 내용의 변경사항을 중요하게 인식하지 않아서 컴포넌트 함수를 재호출(재랜더) 하지 않음 > 그래서 0으로 계속 리셋되지 않고 정상적으로 숫자가 늘어남)
	*/

	const changeButton = (e, txt) => {
		e.target.innerText = txt + num++;
	};

	return (
		<>
			<section>
				<button onClick={(e) => changeButton(e, 'button')}>버튼</button>
			</section>
		</>
	);
}
