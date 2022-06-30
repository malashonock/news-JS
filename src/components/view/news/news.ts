import Article from '../../model/Article';
import './news.css';

class News {
    draw(articles: Article[]) {
        const topArticles = articles.length >= 10 ? articles.filter((_article, idx) => idx < 10) : articles;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        topArticles.forEach((article, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newsarticle = newsClone.querySelector<HTMLElement>('.news__article');
                newsarticle?.classList.add('alt');
            }

            const newsPhoto = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            if (newsPhoto) {
                newsPhoto.style.backgroundImage = `url(${
                    article.urlToImage || 'img/news_placeholder.jpg'
                })`;
            }
            
            const newsAuthor = newsClone.querySelector<HTMLElement>('.news__meta-author');
            if (newsAuthor) {
                newsAuthor.textContent = article.author || article.source.name;
            }
            
            const newsDate = newsClone.querySelector<HTMLElement>('.news__meta-date');
            if (newsDate) {
                newsDate.textContent = article.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
            }

            const newsTitle = newsClone.querySelector<HTMLElement>('.news__description-title');
            if (newsTitle) {
                newsTitle.textContent = article.title;
            }

            const newsDescriptionSource = newsClone.querySelector<HTMLElement>('.news__description-source');
            if (newsDescriptionSource) {
                newsDescriptionSource.textContent = article.source.name;
            }

            const newsDescriptionContent = newsClone.querySelector<HTMLElement>('.news__description-content');
            if (newsDescriptionContent) {
                newsDescriptionContent.textContent = article.description;
            }

            const newsReadMoreLink = newsClone.querySelector<HTMLElement>('.news__read-more a');
            if (newsReadMoreLink) {
               newsReadMoreLink.setAttribute('href', article.url);
            }

            fragment.append(newsClone);
        });

        const newsWrapper = document.querySelector<HTMLElement>('.news')
        if (newsWrapper) {
            newsWrapper.innerHTML = '';
            newsWrapper.appendChild(fragment);
        }
    }
}

export default News;
