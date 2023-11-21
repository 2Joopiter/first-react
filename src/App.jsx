import Card from './card/Card';

export default function App() {
	const colors = ['coral', 'gold', 'lightpink', 'skyblue', 'plum', 'cornflowerblue'];
	const widths = [350, 300, 500, 200, 150];

	return (
		<>
			<h1>Color Chart</h1>
			{colors.map((color, idx) => {
				return (
					<Card
						key={color + idx}
						colorName={color}
						index={idx}
						// JSX 내부적으로는 if문을 쓸 수 없기 때문에 삼항연산자로 값 자체를 조건문 처리 가능
						wid={idx === 1 ? widths[idx] : 200}
						show={idx === 2 ? false : true}
					/>
				);
			})}
			<Card />
		</>
	);
}
