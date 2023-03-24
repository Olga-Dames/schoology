import axios from 'axios';

axios.defaults.baseURL = 'https://641ca9c21a68dc9e460ef868.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/Materials', values);
  return response.data;
};


export const getMaterials = async () => {
  const response = await axios.get('/Materials');
  return response.data;
} 

export const deleteMaterial = async (id) => {
  const response = await axios.delete(`/Materials/${id}`);
  return response.data;
}

export const updateMaterial = async (fields) => {
  const response = await axios.put(`/Materials/${fields.id}`, fields);
  return response.data;
}
