import {MATCHES_SCREEN_URL, TOURNAMENTS_SCREEN_URL} from "config/urls";
import SoccerIcon from "components/atoms/icons/SoccerIcon";
import TableRowsIcon from "components/atoms/icons/TableRowsIcon";

export const DRAWER_WIDTH = 240;

export const DRAWER_ITEMS = [
    {
        url: MATCHES_SCREEN_URL,
        title: 'Matches',
        icon: <SoccerIcon/>
    },
    {
        url: TOURNAMENTS_SCREEN_URL,
        title: 'Tournaments',
        icon: <TableRowsIcon/>
    },
]
