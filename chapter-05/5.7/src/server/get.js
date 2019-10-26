export const getFrom = key => ({ db }) => db[key];
export const getFromBy = key => ({ db }, request) => {
  return db[key].find(Number(request.params.id));
};

export default {
  getFrom,
  getFromBy
};
