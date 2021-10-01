import {action, makeObservable as _, observable, runInAction, computed} from 'mobx';
import ApiStore from "stores/apiStores/ApiStore";
import {matchesApi} from "helpers/api";
import {unpackData} from "helpers/requests";
import {FETCHED, FETCHING, FETCHING_ERROR} from "stores/apiStores/ApiStore/consts";
import {transformComment} from "stores/apiStores/MatchStore/helpers";

class MatchStore extends ApiStore {
    constructor(rootStore) {
        super(rootStore);
        this.rootStore = rootStore;
        this.initFields();
        this.bindMethods();
        this.makeObservable();
    }

    makeObservable() {
        _(this, {
            matches: observable,
            setMatches: action.bound,
            matchesForWidget: computed,
        });
    }

    fetchMatches(tournamentId) {
        this.changeState(FETCHING)
        return matchesApi.get(tournamentId)
            .then((response) => this.handleFetchedMatches(unpackData(response)))
            .catch(this.handleFetchingError)
    }

    handleFetchedMatches({matches, tournaments}) {
        const results = Object
            .keys(matches)
            .map((key) => matches[key])
            .map((match) => {
                const time = match.time.time.split(':').map((number) => parseInt(number))
                const date = match.time.date.split('/')
                return ({
                    ...match,
                    tournamentName: tournaments[match._tid].name,
                    events: transformComment(match.comment),
                    date: new Date(2000 + parseInt(date[2]), date[1] - 1, date[0], time[0], time[1])
                })
            })
            .filter((match) => match.date < new Date())
            .sort((a, b) => b.date - a.date)
        this.setMatches(results)
        // I'm setting the timeout to make do Loader visible, for you to notice it.
        setTimeout(() => this.changeState(FETCHED), 300);
    }

    handleFetchingError(error) {
        this.changeState(FETCHING_ERROR, error)
    }

    getLastNMatches(numberOfMatches) {
        return this.matches.slice(0, numberOfMatches)
    }

    get matchesForWidget() {
        return this.getLastNMatches(5)
            .map(({events, teams, result, time, tournamentName}) => ({
                events,
                teams,
                result,
                time,
                tournamentName
            }))
    }

    setMatches(matches) {
        this.matches = matches
    }

    bindMethods() {
        this.fetchMatches = this.fetchMatches.bind(this);
        this.handleFetchingError = this.handleFetchingError.bind(this);
        this.handleFetchedMatches = this.handleFetchedMatches.bind(this);
        this.getLastNMatches = this.getLastNMatches.bind(this);
    }

    initFields() {
        runInAction(() => {
            this.matches = [];
        });
    }


}

export default MatchStore;
