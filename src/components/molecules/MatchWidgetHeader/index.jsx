import PropTypes from "prop-types";
import {HeaderContainer} from "components/molecules/MatchWidgetHeader/styles";
import {observer} from "mobx-react";

const MatchWidgetHeader = observer(({league, date, time}) => (
    <HeaderContainer>
        <div>{league}</div>
        <div>{time} {date}</div>
    </HeaderContainer>
))

MatchWidgetHeader.propTypes = {
    league: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};


export default MatchWidgetHeader;
