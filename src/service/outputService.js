import api from "./api";

const list = () => api.get(api.url.school).then((res) => res.data);
const search=(data)=>api.post(api.url.search).then
const outPutService = {
  list,
};

export default outPutService;
