// *************************************
//
//   Filter only gulp tasks
//
// *************************************

import path from 'path';

export default (name) => /(\.(js)$)/i.test(path.extname(name));
