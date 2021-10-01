import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import MatchesListLoader from "./index";

describe('MatchesListLoader', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([ROUTER, MOUNT], <MatchesListLoader  numberOfLoaders={5}/>);
        expect(wrapper.find(MatchesListLoader)).toHaveLength(1);
    });
});
