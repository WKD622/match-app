import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import TableRowsIcon from "./index";

describe('TableRowsIcon', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <TableRowsIcon/>);
        expect(wrapper.find(TableRowsIcon)).toHaveLength(1);
    });
});
