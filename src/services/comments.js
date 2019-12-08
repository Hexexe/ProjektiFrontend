import axios from 'axios'
const baseUrl = '/api/comments'

let token = null
const setToken = newToken => {
	token = `bearer ${newToken}`
}

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const create = async newObject => {
	console.log(newObject)
	const config = { headers: { Authorization: token } }
	const response = await axios.post(baseUrl, newObject, config)
	return response.data
}
const remove = async id => {
	const response = await axios.delete(`${baseUrl}/${id}`)
	return response.data
}
const update = async comment => {
	const config = { headers: { Authorization: token } }
	const response = await axios.put(`${baseUrl}/${comment.id}`, comment, config)
	return response.data
}
export default { getAll, create, remove, update, setToken }
