const BASE_URL = "https://ai8ai.github.io/";
// const GITHUB_RAW_BASE = (repo: string, folder: string) => `https://raw.githubusercontent.com/ai8ai/${repo}/main/${folder}/`;
const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/ai8ai/`;  //${repo}/main/${folder}/
// https://raw.githubusercontent.com/ai8ai/aicat/main/scene/bb1.jpg

export const genJpgList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genGifList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}${i + 1}.gif`).sort(() => Math.random() - 0.5);

export const genJpg5 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genJpg55 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${GITHUB_RAW_BASE}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genJpg555 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${GITHUB_RAW_BASE}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);

// aicat/main/scene