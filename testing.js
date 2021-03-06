import { chaiA11yAxe } from 'chai-a11y-axe';

window.chai.use(chaiA11yAxe);

export {
  html,
  aTimeout,
  nextFrame,
  fixture,
  oneEvent
} from '@open-wc/testing-helpers/index.js';

export const { expect } = window.chai;
