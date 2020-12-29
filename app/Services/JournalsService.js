import { ProxyState } from "../AppState.js"
import Journal from "../Models/Journal.js"

class JournalService {


    createJournal(newJournal) {
        console.log("Service Journal")
        let journal = new Journal(newJournal)
        ProxyState.journals = [...ProxyState.journals, journal]
    }

    deleteJournal(id) {
        ProxyState.journals = ProxyState.journals.filter(journal => journal.id != id)
    }
}

export const journalsService = new JournalService()
