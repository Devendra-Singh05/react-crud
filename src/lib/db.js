import axios from "axios"
const DBPATH="http://127.0.0.1:8000/api/";
const all= async function(modalname){
// let data =await(fetch(DBPATH+modalname).then(r=>r.json()));

try{
let alldata=await(axios.get(DBPATH+modalname));
// console.log(alldata.data);
return alldata.data;
}catch(error){
    throw error.response.data
    
}

}
export {all}; 