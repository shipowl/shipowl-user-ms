// import axios, { AxiosInstance, AxiosResponse } from 'axios';
// import CONFIG from '../../config';
// import * as interfaces from '../interfaces';

// class AxoisHelper {
//   private publicFetch: AxiosInstance;

//   constructor() {
//     this.publicFetch = axios.create({
//       baseURL: CONFIG.SPORTS_API.BASE_END_POINT,
//       headers: {
//         [CONFIG.SPORTS_API.ACCESS_KEY]: CONFIG.SPORTS_API.ACCESS_VALUE,
//         [CONFIG.SPORTS_API.HOST_KEY]: CONFIG.SPORTS_API.HOST_VALUE,
//       },
//     });
//   }

//   get = async ({ url }: interfaces.AxiosGetRequest): Promise<AxiosResponse> => {
//     return await this.publicFetch
//       .get(url)
//       .then((response) => response.data)
//       .catch((error) => error.response);
//   };
// }

// export default new AxoisHelper();
