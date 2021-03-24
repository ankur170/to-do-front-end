import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes' ;

const getAll = ()=>{
    return(axios.get(baseUrl))
}

const create = (newObject)=>{
    return(axios.post(baseUrl,newObject))
}

const update = (newObject,id)=>{
    return(axios.put(`${baseUrl}/${id}`,newObject))
}

const services = {getAll,create,update}
export default  services