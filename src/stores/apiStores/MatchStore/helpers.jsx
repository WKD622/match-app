import {EVENT_AWAY_SCORED, EVENT_HOME_SCORED} from "stores/apiStores/MatchStore/consts";

const transformComment = (comment) => {
    if (!comment) {
        return ({
            awayComments: [],
            homeComments: []
        })
    }
    let lastHomeScore = 0;
    let lastAwayScore = 0;
    const events = comment
        .split(',')
        .map((comment) => comment.trim())
        .map((comment) => {
            const splittedComment = comment.split(' ');
            const [homeScore, awayScore] = splittedComment[0].split(':')
            const type = (awayScore > lastAwayScore ? EVENT_HOME_SCORED : EVENT_AWAY_SCORED)
            lastAwayScore = awayScore;
            lastHomeScore = homeScore;
            return {
                homeScore,
                awayScore,
                minute: splittedComment[1].replace(/[().]/g, ''),
                player: splittedComment[2],
                type
            }
        })
    return {
        awayComments: events.filter((event) => event.type === EVENT_AWAY_SCORED),
        homeComments: events.filter((event) => event.type === EVENT_HOME_SCORED)
    }
}

export {transformComment}
