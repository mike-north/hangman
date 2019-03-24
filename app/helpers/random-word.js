import { helper } from '@ember/component/helper';

const WORDS = ['Apple', 'Pear', 'Orange', 'Tomato', 'Kumquat', 'Jackfruit'];

export function randomWord() {
  const idx = Math.round(Math.random() * WORDS.length);
  return WORDS[idx];
}

export default helper(randomWord);
