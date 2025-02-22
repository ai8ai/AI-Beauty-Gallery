const BASE_URL = "https://ai8ai.github.io/";

export const genImgList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

