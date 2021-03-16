import { generateId } from "../Utils/GenerateId.js"

export default class Profile {
    constructor({ title, user, img, location, interests, id }) {
        this.title = title
        this.user = user
        this.img = img
        this.location = location
        this.interests = interests
        this.id = id || generateId()
    }




}