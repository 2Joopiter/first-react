import './Box.scss';

export default function Box() {
	const changeBg = (e, bg) => {
		e.target.style.backgroundColor = bg;
	};

	return (
		<div className='Box' onClick={(e) => changeBg(e, 'hotpink')}>
			Box
		</div>
	);
}
