import Score from "./index";
import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";

describe('Score', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <Score awayScore={1} homeScore={2}/>);
        expect(wrapper.find(Score)).toHaveLength(1);
    });
});
