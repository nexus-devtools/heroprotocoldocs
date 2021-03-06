import replayFolder from './docs/replay-folder.md'
import basics from './docs/basics.md'

import header from './docs/header.md'
import replaytrackerevents from './docs/replay.tracker.events.md'
import replaymessageevents from './docs/replay.message.events.md'
import replayattributeevents from './docs/replay.attribute.events.md'
import replaygameevents from './docs/replay.game.events.md'
import replaydetails from './docs/replay.details.md'
import replayinitdata from './docs/replay.initdata.md'
import developerTools from './docs/developer-tools.md'


export default {
    basics,
    replayFolder,
    replay: {
        header,
        'details': replaydetails,
        'initdata': replayinitdata,
        'tracker.events': replaytrackerevents,
        'game.events': replaygameevents,
        'message.events': replaymessageevents,
        'attribute.events': replayattributeevents
    },
    developerTools
}