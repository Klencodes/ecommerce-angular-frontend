import {ProductModelServer} from "./product.model";

export interface CartModelServer {
  data: [{
    product: ProductModelServer,
    numInCart: number
  }],
  total: number
}

export interface CartModelPublic {
  prodData: [{
    id: number,
    incart: number
  }],
  total: number
}
