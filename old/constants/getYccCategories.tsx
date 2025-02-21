interface YccCategory {
    id: string;
    title: string;
    cover: string;
}

let YccCat: YccCategory[] = [];
let aiArtsCategoryCover = [
    'https://aidrescom.github.io/aiart/aiarts/aiarts_1.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_11.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_6.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_24.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_39.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_51.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_55.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_61.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_78.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_102.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_94.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_95.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_123.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_131.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_150.jpg',
    'https://aidrescom.github.io/aiart/aiarts/aiarts_170.jpg',
]

let aiSceneCategoryCover = [
    'https://aidrescom.github.io/aiart/aiscene/aiscene_10.JPG',
    'https://aidrescom.github.io/aiart/aiscene/aiscene_12.JPG',
    'https://aidrescom.github.io/aiart/aiscene/aiscene_80.jpg',
    'https://aidrescom.github.io/aiart/aiscene/aiscene_15.jpg',
    'https://aidrescom.github.io/aiart/aiscene/aiscene_47.jpg',
    'https://aidrescom.github.io/aiart/aiscene/aiscene_58.jpg',
]

async function fetchYccCategoryCover(): Promise<YccCategory[]> {
    try {
        const response = await fetch('https://raw.githubusercontent.com/AIdrescom/AI-Beauty-Gallery-Data/refs/heads/main/cat_list.json');

        if (!response.ok) {
            throw new Error('Failed to fetch category covers');
        }

        const yccCategoryCover: string[] = await response.json();
        const srcArray = yccCategoryCover.sort(() => Math.random() - 0.5);
        const srcArrScene = aiSceneCategoryCover.sort(() => Math.random() - 0.5);
        const srcArrArts  = aiArtsCategoryCover.sort(() => Math.random() - 0.5);
        
        YccCat = [
            { id: "1", title: "New!",   cover: srcArray[0] },
            { id: "2", title: "arts",   cover: srcArrArts[0] },
            { id: "3", title: "scene",  cover: srcArrScene[0] },
            { id: "4", title: "beautiful & sassy", cover: srcArray[3] },
            { id: "5", title: "graceful elegance", cover: srcArray[4] },
            { id: "6", title: "electric moment",   cover: srcArray[5] },
            { id: "7", title: "full of charm",     cover: srcArray[6] },
            { id: "8", title: "pure & provocative",cover: srcArray[7] }
        ];

        console.log('YccCat (from fetch):', YccCat);
        return YccCat; // Return the populated array
    } catch (error) {
        console.error('Error fetching category covers:', error);

        YccCat = [
            { id: "1", title: "New!", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
            { id: "2", title: "arts", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
            { id: "3", title: "scene", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
            { id: "4", title: "beautiful & sassy", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
            { id: "5", title: "graceful elegance", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
            { id: "6", title: "electric moment", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
            { id: "7", title: "full of charm", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
            { id: "8", title: "pure & provocative", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
        ];

        console.log('YccCat (fallback):', YccCat);
        return YccCat; // Return the fallback data
    }
}

// Export a Promise that resolves to YccCat
const YccCatPromise = fetchYccCategoryCover();

export default YccCatPromise;
