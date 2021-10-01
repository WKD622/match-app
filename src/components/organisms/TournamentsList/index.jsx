import TournamentListElement from "components/molecules/TourmanentListElement";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

const TournamentsList = observer(({tournaments}) => (
    <div>
        {tournaments.map(({name, abbr, year}, i) =>
            <TournamentListElement
                key={name}
                number={i}
                name={name}
                abbr={abbr}
                year={year}
            />
        )}
    </div>
));

TournamentsList.propTypes = {
    tournaments: PropTypes.array.isRequired,
};


export default TournamentsList;
