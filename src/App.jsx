export default function App() {
	const colors = ['coral', 'gold', 'lightpink', 'skyblue', 'plum', 'cornflowerblue'];
	return (
		<>
			<h1>Color Chart</h1>

			<ul>
				{colors.map((color, idx) => {
					// return문에서 map을 통해 반복적으로 생성이 되는 가상돔 요소에는 무조건 고유의 key값을 줘야 됨
					// react로 하여금 여러개의 반복요소 중에서 수정요소를 편하게 비교탐색하게 하기 위함
					// key에 집어넣을 값이 정말 없을 때는 반복되는 순서값을 집어넣을 수 있긴 하나 권장하진 않음
					// DB의 각 데이터에 내장되어있는 object_id(객체 고유값)를 사용하거나 실제 데이터와 순번을 결합해서 고유 문자값 생성
					// 지금의 경우 실제 데이터(color)+순번(idx)

					return (
						<li key={color + idx} style={{ color: color }}>
							{color}
						</li>
					);
				})}
			</ul>
		</>
	);
}
