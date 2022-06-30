import Source from './Source';

interface SourcesResponseSuccess {
  status: 'ok',
  sources: Source[],
}

interface SourcesResponseFailed {
  status: 'error',
  code: string,
  message: string,
}

export type SourcesResponse = SourcesResponseSuccess | SourcesResponseFailed;

