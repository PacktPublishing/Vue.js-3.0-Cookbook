export const postFrom = key => (schema, request) => {
  const data = JSON.parse(request.requestBody.data);

  return schema.db[key].insert(data);
};

export default {
  postFrom,
};
