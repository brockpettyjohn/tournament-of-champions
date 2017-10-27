const initialState = {
    team: "",
    teamsList: [],
    gamesOfSeason: []
}

const TEAM_INPUT = "TEAM_INPUT"
const TEAM_LIST = "TEAM_LIST"
const GAME_CREATOR = "GAME_CREATOR"


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TEAM_INPUT:
            return Object.assign({}, state, { team: action.payload });
        case TEAM_LIST:
            return Object.assign({}, state, { team: '', teamsList: state.teamsList.concat(action.payload) })
        case GAME_CREATOR:
        console.log(state.teamsList)
            let i, j;
            const n = state.teamsList.length
            const tournaments = () => {
                const games = []
                for (i = 0; i < n; i++) {
                    for (j = i + 1; j < n; j++) {
                        games.push(state.teamsList[i] + "vs" + state.teamsList[j]);
                    }
                }
                return games
            }
            return Object.assign({}, state, { gamesOfSeason: tournaments })
        default:
            return state
    }
}

export function teamInput(input) {
    return {
        type: TEAM_INPUT,
        payload: input
    }
}
export function teamListCreator(indTeam) {
    return {
        type: TEAM_LIST,
        payload: indTeam
    }
}
export function gameCreator() {
    console.log("hit action")
    return {
        type: GAME_CREATOR
    }
}
