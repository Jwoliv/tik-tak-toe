import cross from './img/cross-icon.svg'
import zero from './img/zero-icon.svg'
import tringle from './img/tringle-icon.svg'
import square from './img/square-icon.svg'

export const GAME_SYMBOLS = {
    ZERO: 'zero',
    CROSS: 'cross',
    TRINGLE: 'tringle',
    SQUARE: 'square',
}

export const ICONS_PROGRESS = {
    cross: cross,
    zero: zero,
    tringle: tringle,
    square: square,
}

export const MOVE_ORDER = [GAME_SYMBOLS.CROSS, GAME_SYMBOLS.ZERO, GAME_SYMBOLS.TRINGLE, GAME_SYMBOLS.SQUARE]
