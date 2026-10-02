export async function cercar(text) {
    const url = `https://www.omdbapi.com/?s=${text}&apikey=2a2cf7b7`
    const resposta = await fetch(url)
    const dades = await resposta.json()
    console.log(dades.Search);
    return dades.Search
}

export async function mesInfo(imdbID) {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=2a2cf7b7`
    const resposta = await fetch(url)
    const dades = await resposta.json()
    console.log(dades);
    return dades
}