import { useRef, useState } from 'react';
import './App.scss';

export default function App() {
	const num = useRef(0);
	const refBox = useRef(null);

	const mins = () => {
		num.current--;
		console.log(num.current);
	};
	const plus = () => {
		num.current++;
		console.log(num.current);
	};

	// 아래와 같은 경우는 state와 달리 값이 변경시 다음번 렌더링 사이클로 넘어가는 경우가 아니기 때문에
	// 아래 코드에서 볼 수 있듯 전위, 후위에 따른 결과값 차이가 발생하지 않음

	// 전위증감 연산자인 경우
	// ++num.current;
	// num.current = num.current +1;

	// 후위증감 연산자인 경우
	//num.current++
	//num.current = num.current; (1번째 실행-기본 상태)
	//num.current = num.current +1; (2번째 실행-움직임이 생겼을 떄)
	//useRef는 렌더링이 필요 없기 때문에 렌더링이 초기화된 후(1step) 다음에 실행되는 시스템(2step)이 아님. 그래서 후위건 전위건 상관이 없음.

	return (
		<>
			<button onClick={mins}>left</button>
			<button onClick={plus}>right</button>

			<div ref={refBox} className='box' style={{ transform: `rotate(${num.current * 45}deg)` }}></div>
		</>
	);
}

/*

	state: 해당 값이 변경되면 무조건 컴포넌트를 재랜더링, 이전 렌더링 사이클값이 유지됨
	useRef 
		-리액트 내부적으로 기억할 수 있는 값을 담기위한 참조객체 생성함수
		- 실사례: 모션을 위해서 자주 바뀌는 수치값을 컴포넌트를 재호출 하지 않으면서 관리할 때
		- 실사례2: 리얼돔 요소를 리액트 구조 안에서 선택하고 써야 될 때

		<쓰임 1에 대한 해설>
		- useRef를 통해서 생성한 참조객체에 저장한 값은 다른 state 변경에 의해서 컴포넌트가 재렌더링 되더라도 이전 사이클에서의 값을 유지
		- 참조객체에 담겨있는 값을 우리가 임의로 변경하더라도 해당 값의 변경은 state와 달리 컴포넌트를 재랜더링 시키지 않음
		- 모션같이 화면의 정보를 담당하는 중요한 정보값이 아닌 덜 중요한 값들은 참조객체로 관리하는 것이 유리

		<쓰임 2에 대한 해설>
		- 리액트에서 어쩔 수 없이 real DOM을 직접 가져와서 이벤트 연결해야 하는 경우가 있음
		- 스크롤 모션 이벤트, 폼에 input요소 커서 포커스 연결 등등
		- document,querySelector는 리액트의 제어에서 벗어난, 이미 랜더링된 이전의 사이클에서 생성된 신뢰할 수 없는 과거 돔의 데이터를 가지고 있음
		- useRef를 통한 참조객체에 담겨있는 realDOM은 리액트에서 관리하는 신뢰할 수 있는 최신 데이터임
*/
