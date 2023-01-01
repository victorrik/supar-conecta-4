import React from 'react'

const CounterAnimated = () => {
	function animateValue(obj, start, end, duration) {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			obj.innerHTML = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	
	const obj = document.getElementById("value");
	 
	
	return (
		<div>{animateValue(obj, 100, 0, 5000)}</div>
	)
}

export default CounterAnimated