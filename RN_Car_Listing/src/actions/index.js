import { Types } from '../constants/types';
import { Api } from "../constants/api";


// Get Data - READ (R)
export function getCarList(){

    return (dispatch,getState) => {
      console.log('Car List API Call ');
          return fetch(
              `${Api.BASE_PATH}${Api.CAR_LIST}`)
              .then(res => res.json())
              .then((res) => {
                      console.log('Car List API RESPONSE FROM ACTION SCREEN ',res);
                      dispatch({type: Types.SET_CAR_LIST, resCarList:res});
              })
              .catch(error => {
                  console.log(' Car List API RESPONSE FROM ACTION SCREEN ERROR',error.toString());
              }
            );
    };
}
