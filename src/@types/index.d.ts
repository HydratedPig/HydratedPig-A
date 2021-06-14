declare module '.less';
declare let VITE_HH: string;

type LazyImportType = Promise<{ default: React.ComponentType<unknown> }>;
