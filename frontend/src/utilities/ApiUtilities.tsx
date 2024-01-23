import { Product } from "../types/product.types";
import { Order } from "../types/order.types";
import { CustomerDetails, OrderDetails } from "../types/checkout.types";
import dotenv from "dotenv";

dotenv.config();
const host: string = "https://localhost";
const port: number = 8080;
const version: string = "v1";
// const stripeSK = process.env.STRIPE_SK; 
// const stripePaymentURI = "https://api.stripe.com/v1/payment_intents";

async function getData(endpoint: string, id: number | undefined): Promise<string | object[]> {
  if(!endpoint) {
      throw new Error("Unknown host")
  }
    try {
      if(id){
        endpoint = `${endpoint}/${id}`
      }
      const method: string = "GET"
      const headers: HeadersInit = new Headers()
      const requestOptions: RequestInit = {
        method: method,
        headers: headers,
      }
      
      return await fetch(endpoint, requestOptions)
      .then(async (response) => {
          if(!response.ok) {
              throw new Error(`${response.status}: ${response.statusText}`)
          }
          let data: string = await response.text();
          let parsedData: object[] = JSON.parse(data) as object[];
          if(!parsedData){
              return data
          }
          return parsedData;
      })
      .catch( (error) => {
          throw error
      })
  } catch(error) {
      throw error
  }
}

async function postData(endpoint: string, data: [customerDetails, orderDetails]): Promise<string | object> {
  const method: string = "POST"
  const headers: HeadersInit = new Headers({
    "Content-Type": "application/json"
  })
  const body: BodyInit = JSON.stringify(data)
  const requestOptions: RequestInit = {
    method: method, 
    headers: headers, 
    body: body
  }

  try {
    if(!endpoint || !body){
      throw new Error("Missing data!")
    }
      return await fetch(endpoint, requestOptions)
      .then(async(response) => {
        if(!response.ok){
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        let data: string = await response.text();
        let parsedData: object = JSON.parse(data);

        if(!parsedData) {
            return data;
        }
        return parsedData;
      })
      .catch((error) => {
        throw new Error("Error: " + error.message);
      })
    } catch (error) {
        throw new Error("Error: " + error.message);
    }
}

async function putData(endpoint: string, data: [CustomerDetails, OrderDetails]): Promise<string | object> {
  const method: string = "PUT";
  const headers: HeadersInit = new Headers({
    "Content-Type": "application/json"
  })
  const body: BodyInit = JSON.stringify(data);
  const requestOptions: RequestInit = {
    method: method, 
    headers: headers, 
    body: body
  }

  try{
    if(!endpoint || body) {
      throw new Error("Missing data!")
    }
    return await fetch(endpoint, requestOptions)
    .then(async (response) => {
      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
      let data: string = await response.text();
      let parsedData: object = JSON.parse(data);

      if(!parsedData) {
        return data;
      }
      return parsedData;
    })
    .catch((error) => {
      throw error;
    })
  }
  catch(error) {
    throw error
  }
}

async function deleteData(endpoint: string): Promise<string | object> {
  const method: string = "DELETE";
  const headers: HeadersInit = new Headers()
  const requestOptions: RequestInit = {
    method: method, 
    headers: headers, 
  }
  try{
    if(!endpoint) {
      throw new Error("Missing data!")
    }
    return await fetch(endpoint, requestOptions)
    .then(async (response) => {
      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
      let data: string = await response.text();
      let parsedData: object = JSON.parse(data);

      if(!parsedData) {
        return data;
      }
      return parsedData;
    })
    .catch((error) => {
      throw error;
    })
  }
  catch(error) {
    throw error
  }
}

// check data type
async function requestPaymentIntent(data:any): Promise<string | object> {
  const endpoint: string = `${host}:${port}/api/${version}/payment/`;
  const method: string = "POST";
  const headers: HeadersInit = new Headers({
    "Content-Type": "application/json"
})
const body: BodyInit = JSON.stringify(data)
const requestOptions: RequestInit = {
    method: method,
    headers: headers,
    body: body
  }
  try{
    if(!body){
        throw new Error("Missing data!")
    }
    return await fetch(endpoint, requestOptions)
    .then(async (response) => {
        if(!response.ok){
            throw new Error(`${response.status}: ${response.statusText}`)
        }
        let data: string = await response.text()
        let parsedData: object = JSON.parse(data)

        if(!parsedData){
            return data
        }
        return parsedData
    })
    .catch((error) => {
        throw error
    })
  }
  catch(error){
      throw error
  }
}

async function fetchAllProducts(): Promise<object[] | string> {
  const endpoint: string = `${host}:${port}/api/${version}/products`;
  const id: number | undefined = undefined;
  const response: object[] | string = await getData(endpoint, id);

  if(typeof response === "string") {
    throw new Error(`Unexpected response ${response}`)
  }
  return response as Product[];
}

async function fetchProduct(id: number): Promise<object | string>{
  const endpoint: string = `${host}:${port}/api/${version}/products/${id}`
  const response: object | string = await getData(endpoint, id)

  if(typeof response !== "object"){
      throw new Error(`Unexpected response ${response}`)
  }
  return response as Product;
}

//check data type
async function sendPaymentRequest(data:any): Promise<string | object> {
  if(!data) {
    throw new Error("Missing payment data");
  }

  const response: string | object = await requestPaymentIntent(data);
  return response;
}

async function createOrder(data: [CustomerDetails, OrderDetails]): Promise <string | object> {
  if(!data || data.length !== 2){
    throw new Error("Invalid data!")
  }

  const endpoint = `${host}:${port}/api/${version}/orders`;
  const response: string | object = await postData(endpoint, data)
  return response;
}

//   const method = "POST";
//   const headers = { };
//   const body = {
//     customerDetails,
//     orderDetails,
//   }
//   const requestOptions = { 
//   method: method, 
//   headers: headers, 
//   body: body 
// }

//   return await postData(endpoint, requestOptions);
// }

async function getAllOrders(): Promise<string | object> {
  const endpoint: string = `${host}:${port}/api/${version}/orders`
  const id: number | undefined = undefined;
  const response: object[] | string = await getData(endpoint, id);
  if(typeof response !== "object") {
    throw new Error(`Unexpected response ${response}`);
  }
  return response as Order[];
}

async function getOrder(id: number): Promise<string | object> {
  const endpoint: string = `${host}:${port}/api/${version}/orders`;
  const response: object[] | string = await getData(endpoint, id);
  if(typeof response !== "object") {
    throw new Error(`Unexpected response ${response}`);
  }
  return response as Order[]; //ska det vara [] här?
}

async function changeOrder(data: [CustomerDetails, OrderDetails]): Promise<string | object> {
  if(!data || data.length !== 2){
    throw new Error("Invalid data!")
  }
  const endpoint: string = `${host}:${port}/api/${version}/orders`;
  const response: string | object = await putData(endpoint, data);
  return response;
}

async function removeOrder(id: number): Promise<string | object>{
  const endpoint: string = `${host}:${port}/api/${version}/orders/${id}`

  return await deleteData(endpoint)
}

export { 
  fetchAllProducts,
  fetchProduct,
  sendPaymentRequest, 
  createOrder,
  getAllOrders, 
  getOrder, 
  changeOrder, 
  removeOrder
};