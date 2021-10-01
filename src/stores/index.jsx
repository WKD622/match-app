import { createContext, useContext } from 'react';
import TournamentStore from "stores/apiStores/TournamentStore";
import MatchStore from "stores/apiStores/MatchStore";
import LogoStore from "stores/apiStores/LogoStore";

class RootStore {
  constructor() {
    this.tournamentStore = new TournamentStore(this);
    this.matchStore = new MatchStore(this);
    this.logoStore = new LogoStore(this);
  }
}

const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
