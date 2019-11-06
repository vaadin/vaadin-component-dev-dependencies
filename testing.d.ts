/// <reference types="chai-a11y-axe" />

export { html } from '@open-wc/testing-helpers/index.js';
export { aTimeout } from '@open-wc/testing-helpers/index.js';
export { nextFrame } from '@open-wc/testing-helpers/index.js';
export { fixture } from '@open-wc/testing-helpers/index.js';

import chai from 'chai';

type expect = typeof chai.expect;

declare function expect(...args: Parameters<expect>): ReturnType<expect>;

export { expect };
