let config = {};

let hostname = window && window.location && window.location.hostname;

if (hostname.match(/localhost/)) {
  config.apiDomain = 'localhost:3000';
} else if (hostname === 'blog.jackflannery.me') {
  config.apiDomain = 'api.jackflannery.me';
}

config.protocol = 'http';

export default config;
