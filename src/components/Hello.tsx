import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

export interface HelloProps {
	compiler: string;
	framework: string;
}
class Hello extends React.Component<HelloProps, {}> {	
	render() {
		const { compiler, framework } = this.props;

		return (
			<div>
				<h1>Hello from {compiler} and {framework} and Klaes!!</h1>
				<p className={css(styles.red)}>Test</p>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	red: {
		color: 'blue'
	}
})

export default Hello;