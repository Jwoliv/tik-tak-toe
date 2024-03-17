const { default: GameHeader } = require('./GameHeader')

const Game = () => {
    return (
        <div className="pt-6 mx-auto max-w-[616px]">
            <GameHeader />
        </div>
    )
}

export default Game
