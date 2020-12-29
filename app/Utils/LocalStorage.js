import { ProxyState } from "../AppState.js"
import Journal from "../Models/Journal.js"
//import Items from "../Models/Items.js"

export function Save() {
    localStorage.setItem("trip", JSON.stringify({ journal: ProxyState.journals, })) //items: ProxyState.items }))
}

export function Load() {
    let data = JSON.parse(localStorage.getItem("journal"))
    if (data) {
        console.log(data, "journal1")
        ProxyState.journals = data.journal.map(journal => new Journal(journal))

        //ProxyState.items = data.items.map(item => new Items(item))
        // console.log(ProxyState.items, "proxy items")
        // console.log(data, "task2")
    }
}