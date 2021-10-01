import React from 'react';
import {observer} from "mobx-react";
import {Box} from "@material-ui/core";
import {InnerContainer} from "./styles"
import {useStores} from "stores";
import Loader from "components/atoms/Loader";
import MatchesList from "components/organisms/MatchesList";

const MatchesScreen = observer(() => {
    const {matchStore, tournamentStore} = useStores()
    const {matchesForWidget} = matchStore;

    if (!tournamentStore.fetched) return <Loader/>
    return (
        <Box display='flex' alignItems='center' justifyContent='center' m={0}>
            <InnerContainer>
                <MatchesList matches={matchesForWidget} loading={!matchStore.fetched}/>
            </InnerContainer>
        </Box>
    )
})

export default MatchesScreen;
