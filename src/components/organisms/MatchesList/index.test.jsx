import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import MatchesList from "components/organisms/MatchesList/index";

describe('MatchesList', () => {
    it('renders without errors', () => {
        const matches = [
            {
                events: {awayComments: [], homeComments: []},
                teams: {away: {name: 'away', _id: 1}, home: {name: 'home', _id: 2}},
                result: {away: 1, home: 2},
                time: {date: "20/07/10", time: "19:20"},
                tournamentName: 'name'
            },
            {
                events: {awayComments: [], homeComments: []},
                teams: {away: {name: 'away', _id: 1}, home: {name: 'home', _id: 2}},
                result: {away: 2, home: 1},
                time: {date: "20/07/10", time: "19:20"},
                tournamentName: 'name1'
            }]

        const wrapper = wrapMe([ROUTER, MOUNT], <MatchesList loading={false} matches={matches}/>);
        expect(wrapper.find(MatchesList)).toHaveLength(1);
    });
});
