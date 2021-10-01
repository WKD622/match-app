import MatchWidgetLoader from "components/molecules/MatchWidgetLoader";
import PropTypes from "prop-types";

const MatchesListLoader = ({numberOfLoaders}) => {
    const result = []
    for (let i = 0; i < numberOfLoaders; i++) {
        result.push(<MatchWidgetLoader key={i}/>)
    }
    return <div>{result}</div>;
}

MatchesListLoader.propTypes = {
    numberOfLoaders: PropTypes.number.isRequired,
};

export default MatchesListLoader
