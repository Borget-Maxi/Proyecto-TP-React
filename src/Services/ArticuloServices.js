export async function getAll(){
    return await fetch("https://api.mercadolibre.com/sites/MLA/search?q=funkopop").then(response=>response.json())
};

export async function getById(id){
    return await fetch(`https://api.mercadolibre.com/items/${id}`).then(response=>response.json())
};

export async function getDescriptionById(id){
    return await fetch(`https://api.mercadolibre.com/items/${id}/description`).then(response=>response.json())
};