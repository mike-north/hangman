import { helper } from '@ember/component/helper';

export function not([val]/*, hash*/) {
  return !val;
}

export default helper(not);
