import PropTypes from "prop-types";
import MatchWidgetHeader from "components/molecules/MatchWidgetHeader";
import {WidgetBody} from "./styles";
import {observer} from "mobx-react";
import MatchWidgetScore from "components/molecules/MatchWidgetScore";
import MatchWidgetComments from "components/molecules/MatchWidgetComments";

const MatchWidget = observer((
        {
            home,
            away,
            homeId,
            awayId,
            homeScore,
            awayScore,
            homeComments,
            awayComments,
            league,
            date,
            time
        }
    ) => (
        <WidgetBody>
            <MatchWidgetHeader
                league={league}
                date={date}
                time={time}
            />
            <MatchWidgetScore
                league={league}
                awayId={awayId}
                homeId={homeId}
                home={home}
                homeScore={homeScore}
                away={away}
                awayScore={awayScore}
            />
            <MatchWidgetComments
                awayComments={awayComments}
                homeComments={homeComments}
            />
        </WidgetBody>
    )
)


MatchWidget.propTypes = {
    home: PropTypes.string.isRequired,
    away: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired,
    homeComments: PropTypes.array.isRequired,
    awayComments: PropTypes.array.isRequired,
    league: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default MatchWidget
