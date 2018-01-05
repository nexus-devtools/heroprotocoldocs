
import heroprotocol from 'heroprotocol'

class Parser {
    constructor() {
        this.mpq = null
        this.parts = {
            'attribute.events': heroprotocol.ATTRIBUTES_EVENTS,
            'details': heroprotocol.DETAILS,
            'game.events': heroprotocol.GAME_EVENTS,
            'header': heroprotocol.HEADER,
            'initdata': heroprotocol.INITDATA,
            'message.events': heroprotocol.MESSAGE_EVENTS,
            'tracker.events': heroprotocol.TRACKER_EVENTS
        }
        this.onChange = () => {}
    }

    get(part = null) {
        if (part === null) {
            return this.all()
        }

        return heroprotocol.get(this.parts[part], this.mpq)
    }

    all() {
        let results = {}
        Object.keys(this.parts).forEach((part) => {
            results[part] = heroprotocol.get(this.parts[part], this.mpq)
        })

        return results
    }

    set archive(mpq) {
        this.mpq = mpq
        this.onChange(mpq)
    }
}

export default new Parser()