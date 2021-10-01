import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import Comments from "./index";

describe('Comments', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <Comments comments={['first', 'second']} justifyContent={''}/>);
        expect(wrapper.find(Comments)).toHaveLength(1);
    });
});
