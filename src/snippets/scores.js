module.exports = function (replay) {
    return replay['tracker.events'].filter((e) => e._event === 'NNet.Replay.Tracker.SScoreResultEvent')[0]
        .m_instanceList.map((s) => {
            return {
                values: s.m_values.map((e) => e[0]).map((e) => e ? e.m_value : null),
                type: s.m_name
            }
        })
}