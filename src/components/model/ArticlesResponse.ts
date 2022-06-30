import Article from './Article';

interface ArticlesResponseSuccess {
  status: 'ok',
  totalResults: number,
  articles: Article[],
}

interface ArticlesResponseFailed {
  status: 'error',
  code: string,
  message: string,
}

export type ArticlesResponse = ArticlesResponseSuccess | ArticlesResponseFailed;

