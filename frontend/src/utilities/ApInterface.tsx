const host = "https://localhost";
const port = "8080";
const version = "v1";
//kolla att host och port är definierade

async function askAPI(endpoint: string){
    //kolla att endpoint är rätt
    //felhantering här
    return await fetch(endpoint)
    .then( (response) => {
        // kolla response och lägg till felhantering 
        if(!response.ok){
            throw new Error(`${response.status}: ${response.statusText}`)
        }
        // kolla om det går att göra json
        //lägg in riktig felhantering
        let json = response.json();
        //om inte json, skicka ren data i textformat
        if(!json) {
            return response.text();
        }
        //kolla rätt innehåll
        return json
    })
    .catch( (error) => {
        throw new Error(error.message);
    });
}


async function fetchAllProducts(){
    //anropa API
    const endpoint = `${host}:${port}/api/${version}/products`;
    return await askAPI(endpoint);
    //kolla att endpoint är rätt
    //felhantering här
}

export { fetchAllProducts }