import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ToolbarContent, TournamentPicker, useStyles} from "components/templates/DefaultTemplate/styles";
import {observer} from 'mobx-react';
import Drawer from "components/organisms/Drawer";
import {useStores} from "stores";
import {MenuItem} from "@material-ui/core";
import Loader from "components/atoms/Loader";

const DefaultTemplate = observer(({children}) => {
    const classes = useStyles();
    const {tournamentStore, matchStore} = useStores();
    const {tournamentsForPicker, fetched, fetchTournaments} = tournamentStore;
    const {fetchMatches} = matchStore;
    const [chosenTournament, chooseTournament] = useState('');

    useEffect(() => {
        fetchTournaments()
    }, [])

    useEffect(() => {
        if (fetched) {
            const firstTournamentId = tournamentsForPicker[0].id
            chooseTournament(firstTournamentId)
            fetchMatches(firstTournamentId)
        }
    }, [fetched])

    const handleTournamentChange = ({target}) => {
        const tournamentId = target.value
        chooseTournament(tournamentId)
        fetchMatches(tournamentId)
    }

    if (!fetched) return <Loader/>

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <ToolbarContent>
                        <Typography variant="h6" noWrap>
                            Matches App
                        </Typography>
                        <TournamentPicker
                            value={chosenTournament}
                            onChange={handleTournamentChange}
                            id="standard-select-currency"
                            select
                            variant="outlined"
                            label="Choose tournament"
                        >
                            {tournamentsForPicker.map(({name, abbr, year, id}) => (
                                <MenuItem key={id} value={id}>
                                    {abbr}: {name} ({year})
                                </MenuItem>
                            ))}
                        </TournamentPicker>
                    </ToolbarContent>
                </Toolbar>
            </AppBar>
            <Drawer/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    )
});

export default DefaultTemplate;
