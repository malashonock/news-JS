import AppController from '../controller/controller';
import { ArticlesResponse } from '../model/ArticlesResponse';
import { SourcesResponse } from '../model/SourcesResponse';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            ?.querySelector('.sources')
            ?.addEventListener('click', (e: Event) => {
                this.controller.getNews(e, (res: ArticlesResponse) => {
                    this.view.drawNews(res);
                });
            });
        
        this.controller.getSources((res: SourcesResponse) => this.view.drawSources(res));
    }
}

export default App;
