declare module '*.md' {
  const value: string;
  export default value;
}

declare module '*.hydrate' {
  const value: Array<HydrateResult>;
  export default value;
}

declare interface HydrateResult {
  order?: number,
  title?: string,
  filename: string,
  modifiedAt: Date,
  createdAt: Date,
  content: string,
}
