import { API } from "../types/api.types";

const host = "https://localhost";
const port = "8080";
const version = "v1";
const stripeSK = process.env(stripeKey);
const stripePaymentURI = "https://api.stripe.com/v1/payment_intents";
//kolla att host och port är definierade

async function getData(endpoint, id?: number) {
  if(!endpoint) {
      throw new Error("Unknown host")
  }
    try {
      if(id){
        endpoint = `${endpoint}/${id}`
      }
      const method = "GET"
      const headers = { }
      const requestOptions = {
        method: method, 
        headers: headers,
      }
      
      return await fetch(endpoint)
      .then( (response) => {
          if(!response.ok){
              throw new Error(`${response.status}: ${response.statusText}`)
          }
          let data = response.text()
          let json = JSON.stringify(data)
          if(!json){
              return data
          }
          return json
      })
      .catch( (error) => {
          throw new Error(error.message)
      })
  } catch(error) {
      throw error
  }
}

async function postData(endpoint, data) {
  const method = "POST"
  const headers = { } 
  const requestOptions = {
    method: method, 
    headers: headers, 
    body: data,
  }

  try {
      return await fetch(endpoint, requestOptions)
      .then((response) => {
        if(!response.ok){
          throw new Error("There is no response");
        }
          const responseData = await response.json();
          return responseData
      })
      .catch((error) => {
        throw new Error("Error: " + error.message);
      })
    } catch (error) {
        throw new Error("Error: " + error.message);
    }
}


  

async function putData(endpoint, data) {
  
}

async function deleteData(endpoint, data) {
  
}




async function createOrder(data) {
  if(!data || data.length !== 2){
    throw new Error("Invalid data!")
  }

  const customerDetails = data.customerDetails;
  const orderDetails = data.orderDetails; 

  const endpoint = `${host}:${port}/api/${version}/orders`;
  const method = "POST";
  const headers = { };
  const body = {
    customerDetails,
    orderDetails,
  }
  const requestOptions = { 
  method: method, 
  headers: headers, 
  body: body 
}

  return await postData(endpoint, requestOptions);
}



async function fetchAllProducts() {
  const endpoint = `${host}:${port}/api/${version}/products`;
  return await getData(endpoint);
}

async function getAllOrders() {
  const endpoint = `${host}:${port}/api/${version}/orders`
  return await getData(endpoint);
}

async function getOrder() {
  const endpoint = `${host}:${port}/api/${version}/orders`
  return await getData(endpoint);
}

async function updateOrder() {
  const endpoint = `${host}:${port}/api/${version}/orders`
  return await getData(endpoint);
}

async function deleteOrder() {
  const endpoint = `${host}:${port}/api/${version}/orders`
  return await getData(endpoint);
}

export { 
  fetchAllProducts,  };