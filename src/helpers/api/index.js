import api from 'api';
import interceptorsSetup from "helpers/interceptors";

interceptorsSetup();

const tournamentsApi = {
    get: () => api.get('/config_tournaments/1/17')
}

const matchesApi = {
    get: (tournamentId) => api.get(`/fixtures_tournament/${tournamentId}/2021`)
}

export {
    tournamentsApi,
    matchesApi
};
