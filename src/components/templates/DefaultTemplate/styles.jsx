import {makeStyles} from '@material-ui/core/styles';
import {DRAWER_WIDTH} from "components/organisms/Drawer/consts";
import styled from 'styled-components';
import TextField from "components/atoms/TextField";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        backgroundColor: "#3FDA6D",
        color: 'black'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export const TournamentPicker = styled(TextField)`
  width: 350px;
`

export const ToolbarContent = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
