import { useReducer } from 'react';

const initialScore = [
    {
        id: 1,
        score: 0,
        name: "John",
    },
    {
        id: 2,
        score: 0,
        name: "Sally",
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return state.map((player) => {
                if (player.id === action.id) {
                    return { ...player, score: player.score + 1 };
                } else {
                    return player;
                }
            });
        case "DECREASE":
            return state.map((player) => {
                if (player.id === action.id) {
                    return { ...player, score: player.score - 1 };
                } else {
                    return player;
                }
            });    
        default:
            return state;
    }
};

function Score() {
    const [score, dispatch] = useReducer(reducer, initialScore);

    const handleIncrease = (player) => {
        dispatch({ type: "INCREASE", id: player.id });
    };

    const handleDecrease = (player) => {
        dispatch({ type: "DECREASE", id: player.id });
    };

    return (
        <>
            {score.map((player) => (
                <div key={player.id}>
                    <label>
                        <input
                            type="button"
                            onClick={() => handleIncrease(player)}
                            value={player.name + " +"}
                        />
                        <input
                            type="button"
                            onClick={() => handleDecrease(player)}
                            value={player.name + " -"}
                        />
                        {player.score}
                    </label>
                </div>
            ))}
        </>
    );
}

export default Score;
