import JournalsController from "./Controllers/JournalsController.js";

class App {
  journalsController = new JournalsController();
}

window["app"] = new App();
