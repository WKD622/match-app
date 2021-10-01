import {TeamInfoContainer} from "components/atoms/TeamInfo/styles";
import {observer} from "mobx-react";
import {useStores} from "stores";
import PropTypes from "prop-types";

const TeamInfo = observer(({name, teamId, league}) => {
    const {logoStore} = useStores()
    const {hasLogo, fetchLogo, getLogo} = logoStore;
    if (!hasLogo(teamId)) fetchLogo(name, league, teamId)
    return (
        <TeamInfoContainer>
            <div>
                {getLogo(teamId)}
            </div>
            <div>{name}</div>
        </TeamInfoContainer>
    )
})

TeamInfo.propTypes = {
    name: PropTypes.string.isRequired,
    teamId: PropTypes.number.isRequired,
    league: PropTypes.string.isRequired,
};

export default TeamInfo
