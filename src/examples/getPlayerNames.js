module.exports = function(replay) {
    return replay.details.m_playerList.map((player) => player.m_name)
}