'use strict';

import ReactDOM from 'react-dom'
import React from 'react'

const name = 'James Brown';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

