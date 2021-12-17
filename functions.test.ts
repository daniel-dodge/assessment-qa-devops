const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let data = ['robot1','robot2','robot3','robot4','robot5']
    test('return an array', () => expect(shuffleArray(data)).toBe(Array))
    
    test('return the same length', () => expect(shuffleArray(data).length).toBe(5))
})