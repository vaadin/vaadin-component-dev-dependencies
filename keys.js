import {
  keyDownOn,
  keyUpOn,
  keyboardEventFor
} from '@polymer/iron-test-helpers/mock-interactions.js';

export function makeKeydownEvent(key, modifiers = []) {
  return keyboardEventFor('keydown', key, modifiers);
}

export function tabKeyDown(target, modifiers = []) {
  keyDownOn(target, 9, modifiers, 'Tab');
}

export function tabKeyUp(target, modifiers = []) {
  keyUpOn(target, 9, modifiers, 'Tab');
}

export function tab(target, modifiers = []) {
  tabKeyDown(target, modifiers);
  tabKeyUp(target, modifiers);
}

export function arrowDownKeyDown(target, modifiers = []) {
  keyDownOn(target, 40, modifiers, 'ArrowDown');
}

export function arrowDownKeyUp(target, modifiers = []) {
  keyUpOn(target, 40, modifiers, 'ArrowDown');
}

export function arrowDown(target, modifiers = []) {
  arrowDownKeyDown(target, modifiers);
  arrowDownKeyUp(target, modifiers);
}

export function arrowLeftKeyDown(target, modifiers = []) {
  keyDownOn(target, 37, modifiers, 'ArrowLeft');
}

export function arrowLeftKeyUp(target, modifiers = []) {
  keyUpOn(target, 37, modifiers, 'ArrowLeft');
}

export function arrowLeft(target, modifiers = []) {
  arrowLeftKeyDown(target, modifiers);
  arrowLeftKeyUp(target, modifiers);
}

export function arrowRightKeyDown(target, modifiers = []) {
  keyDownOn(target, 39, modifiers, 'ArrowRight');
}

export function arrowRightKeyUp(target, modifiers = []) {
  keyUpOn(target, 39, modifiers, 'ArrowRight');
}

export function arrowRight(target, modifiers = []) {
  arrowRightKeyDown(target, modifiers);
  arrowRightKeyUp(target, modifiers);
}

export function arrowUpKeyDown(target, modifiers = []) {
  keyDownOn(target, 38, modifiers, 'ArrowUp');
}

export function arrowUpKeyUp(target, modifiers = []) {
  keyUpOn(target, 38, modifiers, 'ArrowUp');
}

export function arrowUp(target, modifiers = []) {
  arrowUpKeyDown(target, modifiers);
  arrowUpKeyUp(target, modifiers);
}

export function home(target, modifiers = []) {
  keyDownOn(target, 36, modifiers, 'Home');
}

export function end(target, modifiers = []) {
  keyDownOn(target, 35, modifiers, 'End');
}
