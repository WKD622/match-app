import {CommentContainer, PlayerNameContainer} from "components/atoms/Comments/styles";
import SoccerIcon from "components/atoms/icons/SoccerIcon";
import PropTypes from "prop-types";
import {observer} from "mobx-react";

const Comments = observer(({comments, justifyContent}) => (
    <div>
        {comments.map((comment, i) =>
            <CommentContainer
                key={i}
                justifyContent={justifyContent}
            >
                <SoccerIcon fontSize='inherit'/>
                <PlayerNameContainer>{comment.player}</PlayerNameContainer>
                {comment.minute}'
            </CommentContainer>
        )}
    </div>
))

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    justifyContent: PropTypes.string.isRequired
};

export default Comments;
