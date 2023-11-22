import { useState } from 'react';

/*

	State가 변경 및 반영되는 시점
	1. 이벤트 발생시 State 변경함수로 해당 값이 바뀔때 해당 렌더링 사이클에서 변경됨
	2. 변경된 State값이 실제 DOM에 반영되는 사이클은 그 다음번 렌더링 사이클

	=> 사이클이 돌 때 변경점을 체크하고 변경되지만, 반영은 첫 렌더링 사이클이 끝나고 다음 렌더링 사이클에 반영됨

	(최초 생성된 돔->렌더 1회 실시) -> (변경점을 체크한 1번째 돔(변경점은 체크되나 최초 생성된 돔 상태를 출력)) -> (변경점을 반영한 2번째 돔(변경된 상태를 출력))
	=> 아마도 리액트는 변경점을 객체로 묶어서 반영하기 때문에 끝까지 체크 된 후에 반영을 하는게 아닌가 싶음

*/

export default function App() {
	const [Txt, setTxt] = useState('old');

	/*
위의 로직 실행 순서
1. State값 초기화 (render1)
2. 버튼 클릭시 State값 변경은 되지만 실제 반영되진 않음 (render1)
3. 리액트가 내부적으로 state값 변경을 인지해서 컴포넌트 재 실행
4. 이전 렌더링 사이클에서 변경된 state값이 실제 반영됨 (render2)
*/

	return (
		<>
			<h1>{Txt}</h1>
			<button onClick={() => setTxt('new')}>글자변경</button>
		</>
	);
}
