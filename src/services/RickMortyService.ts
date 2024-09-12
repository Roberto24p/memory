
export interface Result {
    info   : any;
    results: any[];
}

const URL = `https://rickandmortyapi.com/api`;

export  const RickMortyService =  {

    getCharacters : async () : Promise<Result> => {
        const URL_CHARACTERS = `${URL}/character`;
        const data = (await fetch(URL_CHARACTERS)).json();
        return data;
    }
}