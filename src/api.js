import config from './config';

// --- Base HTTP Logic
const _fetch = async (path, fetchOptions) => {
  try {
    const response = await fetch(config.backend.url + path, fetchOptions);
    if (config.debug.http) {
      console.debug('[http]', path, fetchOptions, response);
    }
    return response.json();
  } catch (e) {
    if (config.debug.http) {
      console.error('[http]', path, fetchOptions, e);
    }
    throw e;
  }
};

const get = path => _fetch(path, {});

const post = (path, obj) =>
  _fetch(path, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(obj),
  });

// --- API Endpoints
const Meetings = {
  add: meeting => post('/meetings', meeting),
  list: () => get('/meetings'),
};

// --- Default Export
export default {
  Meetings,
};
