import emojis from '../data/emojis';

const emojify  = (text) => {

    const words = text.split(' ')
    let result = []
    
    words.forEach(function (word) {
        const emoji = emojis[word.toLowerCase()];
        if (emoji) {
            result.push(emoji)
        } else {
            result.push(word)
        }
    })
    
    return result.join(' ')
}

export default emojify;