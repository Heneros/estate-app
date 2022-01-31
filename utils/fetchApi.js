import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6aaedcc609msh928501893d55764p1f7029jsn9b454fee3dc9'
          },
    }); 

    return data;
}
