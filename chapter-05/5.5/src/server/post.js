export const postFrom = key => (schema, request) => {
  const { data } = typeof request.requestBody === 'string'
    ? JSON.parse(request.requestBody)
    : request.requestBody;

  return schema.db[key].insert(data);
};

export default {
  postFrom,
};
