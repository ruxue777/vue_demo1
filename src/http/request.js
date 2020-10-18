import axios from 'axios';

let request = (Url) =>{
    return new Promise((resolve,reject)=>{
        axios.get(Url).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err.data)
        })
    })
}

export {request}