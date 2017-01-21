import React, { Component } from 'react';
import { render } from 'react-dom'
import * as styles from './styles/site.less';
import { App } from './components/app';

render(<App />, document.querySelector("#root"));