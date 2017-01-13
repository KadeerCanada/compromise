'use strict';
const Text = require('../../index');

class Organizations extends Text {
  data() {
    return this.list.map((ts) => {
      return {
        text: ts.plaintext(),
        normal: ts.normal(),
      };
    });
  }
  static find(r, n) {
    r = r.splitAfter('#Comma');
    r = r.match('#Organization+');
    if (typeof n === 'number') {
      r = r.get(n);
    }
    return r;
  }
}

module.exports = Organizations;
