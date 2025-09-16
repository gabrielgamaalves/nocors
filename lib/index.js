import UserAgent from "./core/userAgent";
async function nocors(uri, init = {}) {
  const url = new URL(uri);
  const headers = new Headers({
    "User-Agent": UserAgent({ device: init?.device }),
    "Host": url.host,
    "Origin": url.origin,
    "Referer": url.origin + "/",
    "Connection": "keep-alive"
  });
  if (init?.headers) {
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
export {
  index_default as default
};
