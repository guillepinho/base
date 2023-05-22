/**
 * 
 * @param {Object} params A Object containing all params to be passed to the URL
 * @returns A stringified URLSearchParams of each property passed or a empty string
 */
export default function convertParams(params = {}) {
  const hasElements = Object.keys(params || {}).length;
  if (!hasElements) return '';

  return `?${new URLSearchParams(params)}`;
}
