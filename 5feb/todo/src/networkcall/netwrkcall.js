import axios from 'axios'

const getdata =()=>{
    return axios.get('http://localhost:3336/getdata/getall')
    .then((res)=> res.data)
         
}

const insertdata=(parameter)=>{
    axios.get('http://localhost:3336/insert/data/'+parameter)

}

const add_imp=(param)=>{
    axios.get('http://localhost:3336/insert/imp/'+param)
}


export default {insertdata,getdata,add_imp}

