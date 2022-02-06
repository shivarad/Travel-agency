import { Resort } from "../interfaces";

type BucketState = {
    bucket: Resort[]
  }
  
  type BucketAction = {
    type: string
    payload: Resort
  }
  
  type DispatchType = (args: BucketAction) => BucketAction
  