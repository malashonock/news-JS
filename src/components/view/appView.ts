import { ArticlesResponse } from '../model/ArticlesResponse';
import { SourcesResponse } from '../model/SourcesResponse';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(res: ArticlesResponse) {
        if (res.status === 'ok') {
            const articles = res?.articles || [];
            this.news.draw(articles);
        }
    }

    drawSources(res: SourcesResponse) {
        if (res.status === 'ok') {
            const sources = res?.sources || [];
            this.sources.draw(sources);
        }
    }
}

export default AppView;
