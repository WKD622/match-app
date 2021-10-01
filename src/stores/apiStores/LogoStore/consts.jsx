import {SERP_API_KEY} from "config/apiKeys";

export const SERP_API_URL = (searchPhrase) => `https://serpapi.com/search/?q=${searchPhrase}&tbm=isch&ijn=0&api_key=${SERP_API_KEY}`
