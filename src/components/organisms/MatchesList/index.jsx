import PropTypes from "prop-types";
import MatchWidget from "components/molecules/MatchWidget";
import {observer} from "mobx-react";
import MatchesListLoader from "components/molecules/MatchesListLoader";

const MatchesList = observer(({matches, loading}) => {

    if (loading) return <MatchesListLoader numberOfLoaders={5}/>
    return (
        <div>
            {matches.map(({
                              events: {awayComments, homeComments},
                              teams: {away, home},
                              result,
                              time: {date, time},
                              tournamentName
                          }, i) =>
                <MatchWidget
                    key={i}
                    date={date}
                    time={time}
                    away={away.name}
                    league={tournamentName}
                    awayComments={awayComments}
                    awayId={away._id}
                    awayScore={result.away}
                    homeScore={result.home}
                    home={home.name}
                    homeComments={homeComments}
                    homeId={home._id}
                />
            )}
        </div>
    )
})


MatchesList.propTypes = {
    matches: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default MatchesList
