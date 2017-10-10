import lodash from 'lodash';

const iq = (questions, answers) => {
  const dash = lodash;
  const raw = lodash.values(answers).map((el, idx) => questions[idx + 1].correct == el)
  const score = lodash.compact(raw).length
  return score * 10;
}

export default iq
