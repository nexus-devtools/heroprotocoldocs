module.exports = function (replay) {
    return replay['tracker.events']
        .filter(e => e._event === 'NNet.Replay.Tracker.SStatGameEvent' && e.m_eventName == 'LevelUp')
        .map((e) => {
            if (e.m_intData.length == 2) {
                return {
                    team: e.m_intData[0].m_value >= 5 ? 2 : 1,
                    time: e._gameloop / 16,
                    time: e._gameloop / 16,
                    level: e.m_intData[1].m_value
                }
            }
        })
        .concat()
        .sort()
        .reduce((x, y) => x.findIndex(e => e.team == y.team && e.level == y.level) < 0 ? [...x, y] : x, [])
}