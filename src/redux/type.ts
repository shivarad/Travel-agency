import { Resort } from "../interfaces";



export type BucketState = {
    bucket: Resort[]
  }
  
 export  type BucketAction = {
    type: string
    payload: Resort
  }
  
  