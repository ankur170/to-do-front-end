import axios from 'axios'

const getdata =()=>{
    return axios.get('http://localhost:3336/getdata/getall')
    .then((res)=>{
        console.log(res.data)
        return res.data.map((i)=>{return i.data})
    }).then((ar)=>{
        console.log('aaa haaa')
        return(ar)
    },[])

}

const insertdata=(parameter)=>{
    axios.get('http://localhost:3336/insert/data/'+parameter)
}


export default {insertdata,getdata}

