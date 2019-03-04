// import { createReducer, createReduceOf, setCookie } from '../../util';
// import { LOGIN, USER_LOGIN } from './constant.js';
// import I from 'immuter'


// const initState = {
//   loginSuccess : false,
//   data:[]
// };


// export default createReducer(initState,createReduceOf({

//   [`${USER_LOGIN}_PENDING`]: (state, data, params) => {
//     debugger
//     return state;
//   },
//   [`${USER_LOGIN}_ERROR`]: (state,ret = {}) => {
//     debugger
//     return state;
//   },
//   [`${USER_LOGIN}_SUCCESS`]: (state,ret = {}, params ) => {
//     // setCookie('currentUser',ret.data);
//     debugger
//     return I.set(state,{
//       data: ret.data,
//       loginSuccess : ret.success,
//     });
//   }
// },LOGIN));




