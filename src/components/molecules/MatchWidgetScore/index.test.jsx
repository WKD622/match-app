import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import MatchWidgetScore from "./index";

describe('MatchWidgetScore', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([ROUTER, MOUNT],
            <MatchWidgetScore
                homeId={1}
                awayId={2}
                league='league'
                away='away'
                awayScore={1}
                home='home'
                homeScore={2}
            />);
        expect(wrapper.find(MatchWidgetScore)).toHaveLength(1);
    });
});
