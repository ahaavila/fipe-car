import axios from 'axios';
export const getBranches = async () => {
  try {
      const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas`
      const response = await axios.get(url);
      console.log(response);
      
      // return response.data.responseList
  } catch (err) {
      throw err
  }
}