import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import TournamentListElement from "./index";

describe('TournamentListElement', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([ROUTER, MOUNT],
            <TournamentListElement
                number={1}
                abbr={'abbr'}
                name={'name'}
                year={'21/22'}
            />);
        expect(wrapper.find(TournamentListElement)).toHaveLength(1);
    });
});
