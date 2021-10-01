import styled from "styled-components";
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export const StyledTextField = styled(TextField)`
  color: white;
  && {
    color: white;
  }
`

export const useStyles = makeStyles(() => ({
    MuiInputBase: { color: 'white' },
}));
