import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import DrawerItem from "./index";
import SoccerIcon from "components/atoms/icons/SoccerIcon";

describe('DrawerItem', () => {
    it('renders without errors', () => {
        const icon = <SoccerIcon/>
        const title = 'title'
        const wrapper = wrapMe([ROUTER, MOUNT], <DrawerItem icon={icon} title={title} url={''}/>);
        expect(wrapper.find(DrawerItem)).toHaveLength(1);
    });
});
