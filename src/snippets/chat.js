module.exports = function(replay) {
    return replay['message.events'].filter((e) => e._event === 'NNet.Game.SChatMessage')
}