import React from 'react';
import DefaultTemplate from "./components/templates/DefaultTemplate";
import {MATCHES_SCREEN_URL, TOURNAMENTS_SCREEN_URL} from "config/urls";
import MatchesScreen from "components/screens/MatchesScreen";
import TournamentsScreen from "components/screens/TournamentsScreen";

const routesDefinitions = [
    {
        children: <DefaultTemplate children={<MatchesScreen/>}/>,
        path: MATCHES_SCREEN_URL,
        pageTitle: 'Matches',
        exactPath: true,
    },
    {
        children: <DefaultTemplate children={<TournamentsScreen/>}/>,
        path: TOURNAMENTS_SCREEN_URL,
        pageTitle: 'Tournaments',
        exactPath: true,
    },
]

export default routesDefinitions;
