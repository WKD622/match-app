import PropTypes from "prop-types";
import Comments from "components/atoms/Comments";
import {CommentsContainer} from "./styles";
import {observer} from "mobx-react";

const MatchWidgetComments = observer(({awayComments, homeComments}) => (
    <CommentsContainer>
        <Comments comments={homeComments} justifyContent='start'/>
        <Comments comments={awayComments} justifyContent='end'/>
    </CommentsContainer>
))

MatchWidgetComments.propTypes = {
    awayComments: PropTypes.array.isRequired,
    homeComments: PropTypes.array.isRequired,
};

export default MatchWidgetComments;
