// import { Get } from "../../util/xFetch";

// export function doLogin(params) {
//   // return Get("/api/login/doLogin", params);
// }
import axios from 'axios'
let api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";



export const doLogin = (params) => {
  axios.get(api)
  .then((response)=>{
      console.log(response)
      // this.setState({

      //     data:response

      // })
      return response;
  }).catch(function (error) {
  console.log(error);
  });
 
};