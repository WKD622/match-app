import {action, makeObservable as _, observable, runInAction} from 'mobx';
import ApiStore from "stores/apiStores/ApiStore";
import axios from "axios";
import {SERP_API_URL} from "stores/apiStores/LogoStore/consts";
import "./styles.css";
import SoccerIcon from "components/atoms/icons/SoccerIcon";

class LogoStore extends ApiStore {
    constructor(rootStore) {
        super(rootStore);
        this.rootStore = rootStore;
        this.initFields();
        this.bindMethods();
        this.makeObservable();
    }

    makeObservable() {
        _(this, {
            logos: observable,
            setLogo: action.bound
        });
    }

    getSearchPhrase(teamName, tournamentName) {
        return `${teamName} ${tournamentName} logo`
    }

    getUrl(teamName, tournamentName) {
        const searchPhrase = this.getSearchPhrase(teamName, tournamentName)
        return `https://cors-anywhere.herokuapp.com/${SERP_API_URL(searchPhrase)}`
    }

    fetchLogo(teamName, tournamentName, teamId) {
        axios.get(this.getUrl(teamName, tournamentName))
            .then((results) => {
                this.setLogo(teamId, results.data.images_results[0].original)
            })
    }

    getLogo(teamId) {
        if (this.hasLogo(teamId)) return <img className="photo" src={this.logos.get(teamId)} alt='logo'/>
        return <SoccerIcon fontSize='large'/>
    }

    hasLogo(teamId) {
        return this.logos.has(teamId)
    }

    setLogo(teamId, logoUrl) {
        this.logos.set(teamId, logoUrl)
    }

    bindMethods() {
        this.hasLogo = this.hasLogo.bind(this)
        this.getLogo = this.getLogo.bind(this)
        this.fetchLogo = this.fetchLogo.bind(this)
    }

    initFields() {
        runInAction(() => {
            this.logos = new Map()
        });
    }
}

export default LogoStore;
