import PropTypes from "prop-types";
import {observer} from "mobx-react";

const TournamentListElement = observer(({number, name, abbr, year}) => (
    <div>{number}) {name}  |  abbreviation: {abbr}  |  YEAR: {year}</div>
));

TournamentListElement.propTypes = {
    name: PropTypes.string.isRequired,
    abbr: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

export default TournamentListElement
