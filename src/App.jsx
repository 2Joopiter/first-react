import { Footer, Header } from './components/common/Layout'; // 하나의 파일 안에 여러개의 컴포넌트
import Visual from './components/main/Visual';

export default function App() {
	return (
		<>
			<Header />
			<Visual />
			<Footer />
		</>
	);
}

/*
export default 컴포넌트 함수
: 하나의 파일에서 하나의 컴포넌트 함수를 리턴(내보낼 때)할 때 사용

export 컴포넌트 함수
: 하나의 파일에서 여러개의 컴포넌트 함수를 등록해서 선별적으로 내보낼 때 사용
*/
