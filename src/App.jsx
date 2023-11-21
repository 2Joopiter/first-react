import Card from './card/Card';

export default function App() {
	const colors = ['coral', 'gold', 'lightpink', 'skyblue', 'plum', 'cornflowerblue'];
	const widths = [250, 300, 500, 150, 200];

	return (
		<>
			<h1>Color Chart</h1>
			{colors.map((color, idx) => {
				// 컴포넌트 호출시 특정값을 key={value} 형태로 컴포넌트 내부에 전달 가능(props)
				return <Card key={color + idx} colorName={color} index={idx} wid={200} />;
			})}
			<Card colorName={'black'} index={6} wid={400} show={'none'} />;
		</>
	);
}
