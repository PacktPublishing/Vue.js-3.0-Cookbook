export const deleteFrom = key => (schema, request) => schema.db[key].remove(request.params.id);

export default {
  deleteFrom,
};
