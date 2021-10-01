import React from 'react';
import {observer} from "mobx-react";
import {Box} from "@material-ui/core";
import {InnerContainer} from "./styles"
import {useStores} from "stores";
import TournamentsList from "components/organisms/TournamentsList";

const TournamentsScreen = observer(() => {
    const {tournamentStore} = useStores()
    const {tournamentsForPicker} = tournamentStore;

    return (
        <Box display='flex' alignItems='center' justifyContent='center' m={0}>
            <InnerContainer>
                Tournaments we handle:
                <TournamentsList tournaments={tournamentsForPicker}/>
            </InnerContainer>
        </Box>
    )
})

export default TournamentsScreen;
