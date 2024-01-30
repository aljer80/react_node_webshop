import { product } from "../types/product.types"
import { order } from "../types/order.types"
import { PaymentData} from "../types/checkout.types"
import { PaymentIntentResult } from "@stripe/stripe-js"

const host: string  = "https://localhost"
const port: number = 8080
const version: string = "v1"

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

async function fetchAllProducts(): Promise<product[]>{
    const endpoint: string = `${host}:${port}/api/${version}/products`
    const id: number | undefined = undefined
    const response: object[] | string = await getData(endpoint, id)
    if(typeof response === "string"){
        throw new Error(`Unexpected response ${response}`)
    }
 
    return response as product[]
}

async function fetchProduct(id: number): Promise<object | string>{
    const endpoint: string = `${host}:${port}/api/${version}/products/${id}`

    const response: object | string = await getData(endpoint, id)
    if(typeof response !== "object"){
        throw new Error(`Unexpected response ${response}`)
    }

    return response as product
}

async function createOrder(data: object): Promise<string | object>{
    if(!data){
        throw new Error("Invalid data!")
    }

    const endpoint = `${host}:${port}/api/${version}/orders`

    const response: string | object = await postData(endpoint, data)

    return response
}

async function fetchAllOrders(): Promise<string | object[]>{
    const endpoint: string = `${host}:${port}/api/${version}/orders`
    const id: number | undefined = undefined
    const response: object[] | string = await getData(endpoint, id)
    if(typeof response !== "object"){
        throw new Error(`Unexpected response ${response}`)
    }

    return response as order[]
}

async function fetchOrder(id: number): Promise<string | object>{
    const endpoint: string = `${host}:${port}/api/${version}/orders/${id}`
    const response: object | string = await getData(endpoint, id)
    if(typeof response !== "object"){
        throw new Error(`Unexpected response ${response}`)
    }

    return response as order
}

async function changeOrder(id: number, data: string[]): Promise<string | object>{
    if(!data || data.length !== 2){
        throw new Error("Invalid data!")
    }

    const endpoint: string  = `${host}:${port}/api/${version}/orders/${id}`

    const response: string | object = await putData(endpoint, data);

    //felsökning?
    return response
}

async function removeOrder(id: number): Promise<string | object>{
    const endpoint: string = `${host}:${port}/api/${version}/orders/${id}`

    //felsökning?
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