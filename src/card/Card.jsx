import './Card.scss';

// 미션1 : 부모에서 해당 컴포넌트 호출시 props로 width 값을 전달받아서 각 카드 컴포넌트의 크기가 다르도록 호출
// 미션2 - 부모의 특정 값에 따라 txtBox를 보임 유무를 결정할 수 있게 호출

export default function Card(props) {
	// 부모 컴포넌트에 전달되는 요소들을 props라는 객체로 묶어서 자식 컴포넌트의 파라미터 전달받음
	return (
		<article className='Card' style={{ width: props.wid }}>
			<div className='bgBox' style={{ backgroundColor: props.colorName }}></div>
			<div className='txtBox'>
				{props.index + 1}-{props.colorName}
			</div>
		</article>
	);
}
