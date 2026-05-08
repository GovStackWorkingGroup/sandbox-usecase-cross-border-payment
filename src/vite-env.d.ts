/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_DOCKER_IMAGE_TAG?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
