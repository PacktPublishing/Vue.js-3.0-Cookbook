export const patchFrom = key => (schema, request) => {
  const { data } = typeof request.requestBody === 'string' ?
    JSON.parse(request.requestBody) :
    request.requestBody;

  return schema.db[key].update(data.id, data);
};

export default {
  patchFrom,
};
