const APIS = ["AUTH", "MAIN"] as const;

type URL_MAP = Record<typeof APIS[number], string>;

const context: {
  API: URL_MAP | null;
  loaded: boolean;
} = {
  API: null,
  loaded: false,
};

export const ConfigService = {
  get API() {
    return context.API as URL_MAP;
  },
  init() {
    if (context.loaded) {
      throw new Error("Config service already initilized.");
    }
    context.loaded = true;
    const { urls } = loadConfig();
    context.API = urls;
  },
};

function loadConfig() {
  const urls: any = {};
  for (const moduleName of APIS) {
    urls[moduleName] = (window as any).API_BASE_URLS[moduleName];
  }
  return { urls };
}
