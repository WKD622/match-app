import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import MatchWidgetHeader from "./index";

describe('MatchWidgetHeader', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([ROUTER, MOUNT],
            <MatchWidgetHeader
                date='20/08/10'
                league='league'
                time='19:00'
            />);
        expect(wrapper.find(MatchWidgetHeader)).toHaveLength(1);
    });
});
