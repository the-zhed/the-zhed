import axios from 'axios'

export default {
  getBlockMap(level) {
    return axios.get(`/data/${level}.json`)
      .then(response => response.data.map)
  }
}
