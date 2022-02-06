import { Resort } from "../interfaces"
import * as actionTypes from "./actionTypes"
import { BucketAction, BucketState } from "./type"

const initialState: BucketState = {
  bucket: [],
}

const reducer = (
    state: BucketState = initialState,
    action: BucketAction
  ): BucketState => {
    switch (action.type) {
      case actionTypes.ADD_RESORT:
          let newBucket=[...state.bucket,action.payload]
          newBucket=[...new Map(newBucket.map(item=>[item.id,item])).values()]
        return {
          ...state,
          bucket: newBucket,
        }
      case actionTypes.REMOVE_RESORT:
        const updatedBucket: Resort[] = state.bucket.filter(
          resort => resort.id !== action.payload.id
        )
        return {
          ...state,
          bucket: updatedBucket,
        }
    }
    return state
  }
  
  export default reducer
  