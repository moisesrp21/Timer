import React from 'react';
import {Box, Text} from 'ink';

interface Props {
	secs: number;
}
function toTime(seconds: number) {
	let sec = Number(seconds);
	let h = Math.floor(sec / 3600);
	let m = Math.floor((sec % 3600) / 60);
	let s = Math.floor((sec % 3600) % 60);
	let time = [0, 0, 0, 0, 0, 0];
	time[0] = Math.floor(h / 10);
	time[1] = h % 10;
	time[2] = Math.floor(m / 10);
	time[3] = m % 10;
	time[4] = Math.floor(s / 10);
	time[5] = s % 10;
	return time;
}
export default function App({secs}: Props) {
	const [counter, setCounter] = React.useState(0);
	const [sw, setStopwatch] = React.useState(toTime(secs));
	const time = toTime(secs);

	React.useLayoutEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	React.useEffect(() => {
		setStopwatch(toTime(secs - counter));
		if (secs - counter == -1) process.exit();
	}, [counter]);

	return (
		<Box
			flexDirection="column"
			margin={4}
			borderStyle={'singleDouble'}
			borderColor={'blue'}
			display="flex"
			alignItems="center"
		>
			<Text color="red">
				Timer for {time[0]}
				{time[1]}h:{time[2]}
				{time[3]}m:{time[4]}
				{time[5]}s
			</Text>
			<Text color="green">
				Remaining {sw[0]}
				{sw[1]}h:{sw[2]}
				{sw[3]}m:{sw[4]}
				{sw[5]}s
			</Text>
		</Box>
	);
}
