const initialState = {
    team: ""
}

const TEAM_INPUT = "TEAM_INPUT"

export default function reducer(state = initialState, action){
    switch(action.type){
        case TEAM_INPUT: console.log(this.state.teamI)
        return Object.assign({}, state, {teamInput: action.payload})

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