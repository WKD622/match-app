import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import TeamInfo from "./index";

describe('TeamInfo', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <TeamInfo  league='league' name='name' teamId={1}/>);
        expect(wrapper.find(TeamInfo)).toHaveLength(1);
    });
});
