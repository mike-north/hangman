import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

/**
 * State:
 * * guessed characters X
 * * the word to guess X
 *
 * Derived state:
 * * word with blanks ("HE__O WOR_D") X
 * * number of wrong guesses
 * * isHeadShowing, etc...
 *
 * Hangman parts:
 * * rope
 * * head
 * * body
 * * left arm
 * * right arm
 * * left leg
 * * right leg
 */

export default class GameComponent extends Component {
  @tracked
  guessString = '';

  get guesses() {
    return this.guessString.toUpperCase().split('');
  }

  get isDead() {
    return this.showRLeg;
  }
  get showRope() {
    return this.numWrongGuesses >= 1;
  }
  get showHead() {
    return this.numWrongGuesses >= 2;
  }
  get showBody() {
    return this.numWrongGuesses >= 3;
  }
  get showLArm() {
    return this.numWrongGuesses >= 4;
  }
  get showRArm() {
    return this.numWrongGuesses >= 5;
  }
  get showLLeg() {
    return this.numWrongGuesses >= 6;
  }
  get showRLeg() {
    return this.numWrongGuesses >= 7;
  }

  get numWrongGuesses() {
    let count = 0;
    const uWord = this.args.word.toUpperCase();
    this.guesses.forEach(guess => {
      if (uWord.indexOf(guess) < 0) count++;
    });
    return count;
  }

  get wordWithBlanks() {
    const chars = [];
    for (let i = 0; i < this.args.word.length; i++) {
      const char = this.args.word[i];
      if (this.guesses.indexOf(char.toUpperCase()) >= 0) chars.push(char);
      else chars.push('_');
    }

    return chars.join('').toUpperCase();
  }

  /**
   *
   * @param {Event} evt
   */
  guessListener(evt) {
    this.guessString = evt.target.value;
  }
}
