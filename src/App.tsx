import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { BrowserRouter, Link, RouterMountpoint } from 'reasonable-router';

const NotFound : any = null;
const routeConfig : Object = {
    routes: {
		'/': { component: () => <h1 className={css(styles.red)}>Index</h1> },
		'/about': { component: () => <h1 className={css(styles.red)}>About</h1> },
    },
    miss: () => <h1>Not found :(</h1>
};

class App extends Component<{}, {}> {
  render() {
    return (
      <BrowserRouter routeConfig={routeConfig}>
        <div>
          <Link href='/'>Index</Link> | <Link href='/about'>About</Link> | <Link href='/missme'>No find dis</Link>
          <RouterMountpoint />
        </div>
      </BrowserRouter>
    );
  }
}

const styles = StyleSheet.create({
	red: {
		color: 'red'
	},
	blue: {
		color: 'blue'
	}
})

export default App;