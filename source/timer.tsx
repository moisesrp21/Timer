#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ timer

	Options
		--sec number of seconds to run this timer

	Examples
	  $ timer --sec=1200
	  1200 sec remaining
`,
	{
		importMeta: import.meta,
		flags: {
			secs: {
				type: 'number',
			},
		},
	},
);
const time = cli.flags.secs == undefined ? 0 : cli.flags.secs;
render(<App secs={time} />);
