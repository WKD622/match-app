import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import TournamentsList from "components/organisms/TournamentsList/index";

describe('TournamentsList', () => {
    it('renders without errors', () => {
        const tournaments = [
            {
                name: "name1",
                abbr: "abbr1",
                year: "20/21"
            },
            {
                name: "name2",
                abbr: "abbr2",
                year: "21/22"
            }]
        const wrapper = wrapMe([ROUTER, MOUNT], <TournamentsList tournaments={tournaments}/>);
        expect(wrapper.find(TournamentsList)).toHaveLength(1);
    });
});
