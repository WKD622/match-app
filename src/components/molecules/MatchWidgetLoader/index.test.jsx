import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import MatchWidgetLoader from "./index";

describe('MatchWidgetLoader', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([ROUTER, MOUNT],
            <MatchWidgetLoader/>);
        expect(wrapper.find(MatchWidgetLoader)).toHaveLength(1);
    });
});
