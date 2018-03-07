import axios from 'axios'

export default {
  getBlockMap(level) {
    return axios.get(`/data/test.json`)
      .then(response => response.data.map)
  }
}
