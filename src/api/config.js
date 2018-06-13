export const apiURL = process.env.REACT_APP_API_URL;

export const http = options => {
  const { url, params, withAuth = true, ...restOptions } = options;
  let urlPath = options.url;
  if (
    options.method &&
    options.method.toLowerCase() === "get" &&
    options.params
  ) {
    urlPath = getUrl(options.url, options.params);
  }
  let headers = options.headers;
  if (withAuth) {
    headers = { ...options.headers, ...getAuthHeaders() };
  }
  return fetch(urlPath, {
    ...restOptions,
    headers
  }).then(response => {
    if (response.status !== 200) {
      throw response.statusText;
    }
    return response.json();
  });
};

export const getAbortController = () => {
  return (
    (window.AbortController && new window.AbortController()) || {
      abort: () => {}
    }
  );
};

export const getAuthHeaders = () => {
  return null;
};

export const getUrl = (url, params) => {
  const newUrl = new URL(url);
  Object.keys(params)
    .filter(key => params[key] !== undefined)
    .forEach(key => newUrl.searchParams.append(key, params[key]));
  return newUrl;
};
