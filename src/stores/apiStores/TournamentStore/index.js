import {action, computed, makeObservable as _, observable, runInAction} from 'mobx';
import ApiStore from "stores/apiStores/ApiStore";
import {tournamentsApi} from "helpers/api";
import {unpackData} from "helpers/requests";
import {FETCHED, FETCHING, FETCHING_ERROR} from "stores/apiStores/ApiStore/consts";

class TournamentStore extends ApiStore {
    constructor(rootStore) {
        super(rootStore);
        this.rootStore = rootStore;
        this.initFields();
        this.bindMethods();
        this.makeObservable();
    }

    makeObservable() {
        _(this, {
            tournaments: observable,
            uniqueTournaments: observable,
            setTournaments: action.bound,
            setUniqueTournaments: action.bound,
            tournamentsForPicker: computed
        });
    }

    fetchTournaments() {
        this.changeState(FETCHING)
        return tournamentsApi.get()
            .then((response) => this.handleFetchedTournaments(unpackData(response)))
            .catch(this.handleFetchingTournamentsError)
    }

    handleFetchingTournamentsError(error) {
        this.changeState(FETCHING_ERROR, error)
    }

    handleFetchedTournaments(data) {
        this.setTournaments(data.tournaments)
        this.setUniqueTournaments(data.uniquetournaments)
        this.changeState(FETCHED)
    }

    setTournaments(tournaments) {
        this.tournaments = tournaments
    }

    setUniqueTournaments(uniqueTournaments) {
        this.uniqueTournaments = uniqueTournaments
    }

    get tournamentsForPicker() {
        return this.tournaments.map(({abbr, name, year, _id}) => ({name, abbr, year, id: _id}))
    }

    getTournamentNameById(tournamentId) {
        return this.tournaments.find((tournament) => tournament._id === tournamentId)
    }

    bindMethods() {
        this.handleFetchedTournaments = this.handleFetchedTournaments.bind(this)
        this.handleFetchingTournamentsError = this.handleFetchingTournamentsError.bind(this)
        this.fetchTournaments = this.fetchTournaments.bind(this)
        this.getTournamentNameById = this.getTournamentNameById.bind(this)
    }

    initFields() {
        runInAction(() => {
            this.tournaments = [];
            this.uniqueTournaments = [];
        });
    }


}

export default TournamentStore;
