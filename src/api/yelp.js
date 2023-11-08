import axios from "axios";
export default axios.create({

baseURL:'https://api.yelp.com/v3/businesses', 
headers:{
    Authorization:'Bearer iihaFWcQDCmomxqPpnvFv-O4zzgafM1uki8-MEzf9cRPJRYGAwZCP9dXL7r_UB3MG2SiatIZDKb82u9xIsN_hUC_Av0hJ5oT52WICpaMKQhzfU_BDK9ZU9cHEPFIZXYx',
},

})