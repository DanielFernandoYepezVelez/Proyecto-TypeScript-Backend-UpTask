/* Application */
import { App } from "./app";

class Main {
  private main = new App();

  constructor() {
    this.init();
  }

  private init(): void {
    this.main.middlewares();
    this.main.staticFiles();
    this.main.routes();
    this.main.server();
  }
}

export default new Main();