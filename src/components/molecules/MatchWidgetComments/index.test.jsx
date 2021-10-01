import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import MatchWidgetComments from "./index";

describe('MatchWidgetComments', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([ROUTER, MOUNT],
            <MatchWidgetComments
                awayComments={['firstAwayComment', 'secondAwayComment']}
                homeComments={['firstHomeComment, SecondHomeComment']}
            />);
        expect(wrapper.find(MatchWidgetComments)).toHaveLength(1);
    });
});
