import axios from 'axios'
const tokenProvider = require('axios-token-interceptor');
// axios.defaults.baseURL = 'http://192.168.1.12:8086/v1/'
axios.defaults.baseURL = process.env.SERVER_URL
// axios.defaults.baseURL = '/v1/'
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
axios.interceptors.request.use(tokenProvider({
  token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNmFmMjYzODItM2RiZi00ZWZjLTgzMDgtMzZjYjdkZGRiZGQ0IiwicmVmcmVzaFRva2VuIjoiYnpSaThMSHRGVXoyUXFLdzJhU1pWUjJqZ0FLVW5ZVEcyY1oyRUwyZGtseE5VcnJ4dktHV08wOERIM2ZKYzd6bVlpWUVyNmFZMzhINXl1SFY2cUhvVDVQYTZ0RUREVXc0MkNCQWlRZk9JcU1leUpiNzltNmdLMnBMN2NZdEZURmhhTDhONHkyblR6NlJGWHZmOGhONDNXV0drSW5WSjNDZW91cnZXQm1pTmtnUmpsMFBtOHY4SzRyTUxmVklJRE5YdVE2RFlKWmRvWmJBSVZNWjhwZ25Wb3hYTEJhZVV3d0lOVkI5WEVEZmFIazM5U1VMblJWdU95WW8xczljTVU1aiIsImNyZWF0aW9uRGF0ZSI6IjEzOTgwOTEzMTIwNTUyIiwibGlmZVRpbWUiOjg2NDAwMDAwMCwiY2xpZW50SWQiOiIxMjM0NSIsInVzZXJJZCI6IjAwMTQ2NTk5NjQiLCJhY3RpdmUiOnRydWUsInNjb3BlcyI6WyJmYWNpbGl0eTpjYXJkLXRvLWRlcG9zaXQ6Z2V0IiwiZmFjaWxpdHk6Y2FyZC10by1pYmFuOmdldCIsImZhY2lsaXR5OmNjLWRlcG9zaXQtaWJhbjpnZXQiXSwidHlwZSI6IkNMSUVOVC1DUkVERU5USUFMIiwiYmFuayI6IjA2MiIsImlhdCI6MTU3NTQ0ODU1MiwiZXhwIjoxNTc2MzEyNTUyfQ.elibLEGvz3x1TJxwnmYWrukmFtapt9JVIltgZGfvG2_ET8tDugNjupLvWCqyWBCdQuD00PcNnB_vkj2Z9RDAJ7K3oCtcFRWkK9IkD789nLFXt3M8-eSFkR4sNRUu8p9fqX0TqlCExG9E5BCWb4RTZLPuOOdWUpyhVixOHyGuSuKfgE7yZT415B3i_YFmwy9ZNOYzW9xK7jgwiTn4YUZoF52dHREXxpVj3UJUHBo3FaWKnKSiq-xVcGBgziAbNv1OO0auQmtqs21YF0H-_I_CDP86Ivozr1HuVtlUD-ez1u5pYA-TWkcc5MURT8MprXWLh_JeAEf_OLbM0iLB6QrUbg'
}));
export default {
  // ============== General Get method
  getMethod (url, data = {params: {}}) {
    return axios.get(url, data)
      .then(response => {
        return response.data
      })
  },
  // ============== General Put method
  putMethod (url, data) {
    return axios.put(url, data)
      .then(response => {
        return response.data
      })
  },
  // ============== General Delete method
  deleteMethod (url) {
    return axios.delete(url)
      .then(response => {
        return response.data
      })
  },
  // ============== General Post method
  postMethod (url, data = {}) {
    return axios.post(url, data)
      .then(response => {
        return response.data
      })
  },
  // ============== General Upload method
  uploadFile (formData) {
    return axios.post('/medias',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(response => {
      return response.data
    })
      .catch(error => {
        return error
      })
  },
  setSession () {
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      config.headers = {'X-Session': localStorage.getItem('session')}
      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })
  }
}
