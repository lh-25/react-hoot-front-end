import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/hoots`;

const index = async () => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

const indexMyHoots = async () => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.get(`${BASE_URL}/my-hoots`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
  } catch (error) {
   console.log(error) 
   throw error
  }
}

const show = async (hootId) => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.get(`${BASE_URL}/${hootId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const create = async (hootFormData) => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.post(BASE_URL, hootFormData,{
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const createComment = async (hootId,commentFormData) => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.post(`${BASE_URL}/${hootId}/comments`, commentFormData,{
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    })
    return res.data
  } catch (error) {
    console.log(error)
  } 
}

const deleteHoot = async (hootId) => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.delete(`${BASE_URL}/${hootId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const update = async (hootId,hootFormData) => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.put(`${BASE_URL}/${hootId}`, hootFormData,{
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    })
    return res.data
  } catch (error) {
    console.log(error)
  } 
}

export {
  index,
  show,
  create,
  createComment,
  deleteHoot,
  update,
  indexMyHoots

}