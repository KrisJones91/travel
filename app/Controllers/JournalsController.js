import { ProxyState } from "../AppState.js"
import { journalsService } from "../Services/JournalsService.js";


//Private

function _drawJournal() {

    let journals = ProxyState.journals
    let templates = "";
    journals.forEach(journal => {
        templates += journal.Template;
    })
    document.getElementById("trip").innerHTML = templates
}



//Public
export default class JournalController {
    constructor() {
        ProxyState.on("journals", _drawJournal)
        _drawJournal()
    }

    createJournal() {
        window.event.preventDefault()
        console.log("Create Journal")
        let form = window.event.target
        let newJournal = {
            title: form['title'].value,
            imgURL: form['imgURL'].value,
            date: form['date'].value,
            rating: form['rating'].value,
            description: form['description'].value
        }
        journalsService.createJournal(newJournal)
        // @ts-ignore
        form.reset()
        // @ts-ignore
        document.getElementById('new-journal-modal')//.modal('hide');

    }

    deleteJournal(id) {
        journalsService.deleteJournal(id)
    }
}