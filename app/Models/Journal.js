import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"



export default class Journal {
    constructor({ imgURL, title, date, rating, description, id }) {
        this.imgURL = imgURL
        this.title = title
        this.date = date
        this.rating = rating
        this.description = description
        this.id = id || generateId()
    }

    get Template() {
        return /*html*/`
        <div class="card col-12 col-md-4" style="width: 18rem;">
            <img class="card-img-top my-2" src=" ${this.imgURL}" alt="...">
                 <div class="card-body text-center">
                    <h5 class="card-title">${this.title}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${this.date}</li>
                        <li class="list-group-item">${this.rating}</li>
                        <li type="button" class="list-group-item">
                        <p>${this.description}</p>
                        </li>
                    </ul>
                        <a href="#" class="btn btn-outline-danger m-3" onclick="app.journalsController.deleteJournal('${this.id}')">Delete Post</a>
                </div>
        </div>
        
        `
    }

}