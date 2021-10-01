import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import SoccerIcon from "./index";

describe('SoccerIcon', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <SoccerIcon/>);
        expect(wrapper.find(SoccerIcon)).toHaveLength(1);
    });
});
