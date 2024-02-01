import { product } from "../types/product.types"
import { order } from "../types/order.types"
import { PaymentData} from "../types/checkout.types"
import { PaymentIntentResult } from "@stripe/stripe-js"

const host: string  = "http://localhost"
const port: number = 8080
const version: string = "v1"

/**
 * Fetch data from an API endpoint using a GET request.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {number | undefined} id - An optional identifier for the specific data item.
 * @returns {Promise<string | object[]>} A promise that resolves to the fetched data (either string or object array).
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function getData(endpoint: string, id: number | undefined): Promise<string | object[]>{
    if(!endpoint){
        throw new Error("Unknown host")
    }
    try{
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
            if(!response.ok){
                throw new Error(`${response.status}: ${response.statusText}`)
            }
            let data: string = await response.text()
            let parsedData: object[] = JSON.parse(data) as object[]

            if(!parsedData){
                return data
            }
            return parsedData
        })
        .catch( (error) => {
            throw error
        })
    }
    catch(error){
        throw error
    }
}

/**
 * Send data to an API endpoint using a POST request.
 *
 * @param {string} endpoint - The API endpoint to send data to.
 * @param {object} data - The data to send as the request body.
 * @returns {Promise<string | object>} A promise that resolves to the response data (either string or object).
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function postData(endpoint: string, data: object): Promise<string | object>{
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

    try{
        if(!endpoint || !body){
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

/**
 * Update data at an API endpoint using a PUT request.
 *
 * @param {string} endpoint - The API endpoint to update data at.
 * @param {string[]} data - The data to send as the request body.
 * @returns {Promise<string | object>} A promise that resolves to the response data (either string or object).
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function putData(endpoint: string, data: string []): Promise<string | object >{
    const method: string = "PUT"
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
        if(!endpoint || !body){
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

/**
 * Delete data at an API endpoint using a DELETE request.
 *
 * @param {string} endpoint - The API endpoint to delete data from.
 * @returns {Promise<string | object>} A promise that resolves to the response data (either string or object).
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function deleteData(endpoint: string): Promise<string | object>{
    const method: string = "DELETE"
    const headers: HeadersInit = new Headers()
    const requestOptions: RequestInit = {
        method: method,
        headers: headers,
    }

    try{
        if(!endpoint){
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

/**
 * Request a payment intent from a payment gateway using a POST request.
 *
 * @param {PaymentData} paymentData - The payment data to send as the request body.
 * @returns {Promise<PaymentIntentResult>} A promise that resolves to the payment intent result.
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function requestPaymentIntent(paymentData: PaymentData): Promise<PaymentIntentResult>{
    const endpoint:string = `${host}:${port}/api/${version}/payments/`
    const method: string = "POST"
    const headers: HeadersInit = new Headers({
        "Content-Type": "application/json"
    })
    const body: BodyInit = JSON.stringify(paymentData)
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
                throw new Error(data)
            }
            if(!parsedData.paymentIntent){
                throw new Error("Missing intent!")
            }
            const paymentIntent: PaymentIntentResult = parsedData.paymentIntent

            return paymentIntent
        })
        .catch((error) => {
            throw error
        })
    }
    catch(error){
        throw error
    }
}

/**
 * Fetch all products from the API.
 *
 * @returns {Promise<product[]>} A promise that resolves to an array of product objects.
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function fetchAllProducts(): Promise<product[]>{
    const endpoint: string = `${host}:${port}/api/${version}/products`
    const id: number | undefined = undefined

    const response: object[] | string = await getData(endpoint, id)
    if(typeof response === "string"){
        throw new Error(`Unexpected response ${response}`)
    }
 
    return response as product[]
}

/**
 * Fetch a specific product by its ID from the API.
 *
 * @param {number} id - The ID of the product to fetch.
 * @returns {Promise<object | string>} A promise that resolves to the fetched product or an error message.
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function fetchProduct(id: number): Promise<object | string>{
    const endpoint: string = `${host}:${port}/api/${version}/products/${id}`

    const response: object | string = await getData(endpoint, id)
    if(typeof response !== "object"){
        throw new Error(`Unexpected response ${response}`)
    }

    return response as product
}

/**
 * Create a new order by sending order data to the server.
 *
 * @param {object} data - The order data to create a new order.
 * @returns {Promise<string | object>} A promise that resolves to the response data (either string or object).
 * @throws {Error} Throws an error if the data is invalid, or if the request fails or the response is unexpected.
 */
async function createOrder(data: object): Promise<string | object>{
    if(!data){
        throw new Error("Invalid data!")
    }

    const endpoint = `${host}:${port}/api/${version}/orders`

    const response: string | object = await postData(endpoint, data)

    return response
}

/**
 * Fetch all orders from the server.
 *
 * @returns {Promise<order[]>} A promise that resolves to an array of order objects.
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function fetchAllOrders(): Promise<string | object[]>{
    const endpoint: string = `${host}:${port}/api/${version}/orders`
    const id: number | undefined = undefined
    const response: object[] = JSON.parse(await getData(endpoint, id))
    if(typeof response !== "object"){
        throw new Error(`Unexpected response ${response}`)
    }

    return response as order[]
}

/**
 * Fetch a specific order by its ID from the server.
 *
 * @param {number} id - The ID of the order to fetch.
 * @returns {Promise<object | string>} A promise that resolves to the fetched order or an error message.
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function fetchOrder(id: number): Promise<string | object>{
    const endpoint: string = `${host}:${port}/api/${version}/orders/${id}`
    const response: object | string = await getData(endpoint, id)
    if(typeof response !== "object"){
        throw new Error(`Unexpected response ${response}`)
    }

    return response as order
}

/**
 * Update an existing order by sending updated order data to the server.
 *
 * @param {number} id - The ID of the order to update.
 * @param {string[]} data - An array containing customer details and items data for the order update.
 * @returns {Promise<string | object>} A promise that resolves to the response data (either string or object).
 * @throws {Error} Throws an error if the data is invalid, or if the request fails or the response is unexpected.
 */
async function changeOrder(id: number, data: string[]): Promise<string | object>{
    if(!data || data.length !== 2){
        throw new Error("Invalid data!")
    }
    const endpoint: string = `${host}:${port}/api/${version}/orders/${id}`
    const values = {
        customerDetails: data[0],
        items: data[1]
    }

    const response: string | object = await putData(endpoint, values);

    return response
}

/**
 * Remove an existing order by sending a DELETE request to the server.
 *
 * @param {number} id - The ID of the order to remove.
 * @returns {Promise<string | object>} A promise that resolves to the response data (either string or object).
 * @throws {Error} Throws an error if the request fails or the response is unexpected.
 */
async function removeOrder(id: number): Promise<string | object>{
    const endpoint: string = `${host}:${port}/api/${version}/orders/${id}`

    return await deleteData(endpoint)
}

export {
    fetchAllProducts,
    fetchProduct,
    requestPaymentIntent,
    createOrder,
    fetchAllOrders,
    fetchOrder,
    changeOrder,
    removeOrder
}