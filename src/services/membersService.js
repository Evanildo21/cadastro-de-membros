import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  getAll() {
    return api.get('/members')
  },

  create(member) {
    return api.post('/members', member)
  },

  update(member) {
    return api.put(`/members/${member.id}`, member)
  },

  delete(id) {
    return api.delete(`/members/${id}`)
  }
}
