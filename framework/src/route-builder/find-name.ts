import OpenApi from './open-api.js';

export const findName = (
  openApi: OpenApi,
  uri: string,
  method: string,
) => openApi.routes[uri][method].operationId ||
  openApi.routes[uri][method].summary ||
  openApi.routes[uri][method].description ||
  method + ' ' + uri;
