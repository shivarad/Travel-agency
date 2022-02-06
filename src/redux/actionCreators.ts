import { Resort } from "../interfaces"
import * as actionTypes from "./actionTypes"

export const addToBucket=(resort: Resort)=> ({
  
    type: actionTypes.ADD_RESORT,
    payload:resort,
  

})

export const removeFromBucket=(resort: Resort)=> ({
    type: actionTypes.REMOVE_RESORT,
    payload:resort,
  })
 

