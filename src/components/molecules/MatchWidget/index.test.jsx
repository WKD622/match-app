import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import MatchWidget from "./index";

describe('MatchWidget', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([ROUTER, MOUNT],
            <MatchWidget
                away='away'
                awayComments={[]}
                awayScore={1}
                date='20/08/10'
                home='home'
                homeComments={[]}
                homeScore={2}
                league='league'
                time='19:00'
                homeId={1}
                awayId={1}
            />);
        expect(wrapper.find(MatchWidget)).toHaveLength(1);
    });
});
