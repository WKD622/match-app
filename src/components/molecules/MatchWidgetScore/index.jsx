import PropTypes from "prop-types";
import {ScoreContainer} from "components/molecules/MatchWidgetScore/styles";
import TeamInfo from "components/atoms/TeamInfo";
import {observer} from "mobx-react";
import Score from "components/atoms/Score";

const MatchWidgetScore = observer(({home, away, homeScore, awayScore, homeId, awayId, league}) => (
    <ScoreContainer>
        <TeamInfo name={home} teamId={homeId} league={league}/>
        <Score awayScore={awayScore} homeScore={homeScore}/>
        <TeamInfo name={away} teamId={awayId} league={league}/>
    </ScoreContainer>
))

MatchWidgetScore.propTypes = {
    home: PropTypes.string.isRequired,
    away: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired,
    homeId: PropTypes.number.isRequired,
    awayId: PropTypes.number.isRequired,
    league: PropTypes.string.isRequired,
};

export default MatchWidgetScore
