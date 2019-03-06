const env = (variableBase, defaultValue) => {
  const variable = `REACT_APP_${variableBase}`;
  const value = process.env[variable] || defaultValue;

  if (typeof value === 'undefined') {
    throw new Error(`Environment variable '${variable}' is required!`);
  }

  return value;
};

// !!! NOTE !!!
//
// Environment variables have to be supplied as `REACT_APP_<variable>` due to
// 'create-react-app' ignoring everything else.
//
// See:
// - https://medium.com/@tacomanator/environments-with-create-react-app-7b645312c09d
// - https://github.com/facebook/create-react-app/issues/2865
//
// The shorthand here is just for readability!
//
export default {
  backend: {
    url: env('BACKEND_URL', 'http://localhost:8000'),
  },
  debug: {
    http: process.env.NODE_ENV === 'development',
  },
};
