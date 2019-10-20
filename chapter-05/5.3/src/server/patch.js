export const patchFrom = key => (schema, request) => {
  const data = JSON.parse(request.requestBody.data);

  return schema.db[key].update(data.id, data);
};

export default {
  patchFrom,
};
