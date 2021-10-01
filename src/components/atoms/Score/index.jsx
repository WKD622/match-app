import PropTypes from "prop-types";
import {ResultContainer, ScoreContainer} from "./styles";
import {observer} from "mobx-react";

const Score = observer(({awayScore, homeScore}) => (
    <ScoreContainer>
        <ResultContainer>{awayScore}</ResultContainer>
        <ResultContainer>-</ResultContainer>
        <ResultContainer>{homeScore}</ResultContainer>
    </ScoreContainer>
))

Score.propTypes = {
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired,
};

export default Score
