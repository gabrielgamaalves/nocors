"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _userAgent = require('./core/userAgent'); var _userAgent2 = _interopRequireDefault(_userAgent);
async function nocors(uri, init = {}) {
  const url = new URL(uri);
  const headers = new Headers({
    "User-Agent": _userAgent2.default.call(void 0, { device: _optionalChain([init, 'optionalAccess', _ => _.device]) }),
    "Host": url.host,
    "Origin": url.origin,
    "Referer": url.origin + "/",
    "Connection": "keep-alive"
  });
  if (_optionalChain([init, 'optionalAccess', _2 => _2.headers])) {
    Object.entries(init.headers).forEach(([key, value]) => {
      headers.set(key, value);
    });
    delete init.headers;
  }
  const $f = await fetch(url, {
    headers,
    referrer: url.origin,
    ...init
  });
  return $f;
}
var index_default = nocors;


exports.default = index_default;
