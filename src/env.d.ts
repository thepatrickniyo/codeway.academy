interface ImportMetaEnv {
    readonly SANITY_PROJECT_ID: string;
    readonly SANITY_DATASET: string;
    readonly ENV: string;
  }
  
  interface ImportMeta {
    readonly VITE_SANITY_PROJECT_ID: string;
    readonly VITE_SANITY_DATASET: string;
    readonly env: ImportMetaEnv;
  }