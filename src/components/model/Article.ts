import { SourcePreview } from "./Source";

export default interface Article {
  source: SourcePreview,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
}