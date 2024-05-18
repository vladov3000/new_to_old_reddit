const old    = window.location.href;
const url    = new URL(old);
url.hostname = "old.reddit.com";
window.location.replace(url.toString());
