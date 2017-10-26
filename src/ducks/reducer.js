const initialState = {
    team: "",
    games: []
}

const TEAM_INPUT = "TEAM_INPUT"
const GAME_CREATOR = "GAME_CREATOR"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TEAM_INPUT:
            return Object.assign({}, state, { team: action.payload });
        case GAME_CREATOR:
            return Object.assign({}, state, { team: '', games: state.games.concat(action.payload) })

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
export function gameCreator(indTeam) {
    return {
        type: GAME_CREATOR,
        payload: indTeam
    }
}