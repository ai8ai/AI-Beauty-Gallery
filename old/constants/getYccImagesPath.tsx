export const getImagesByCategory = async (yccCatId: string) => {
    const jsonUrl = 'https://raw.githubusercontent.com/AIdrescom/AI-Beauty-Gallery-Data/refs/heads/main/pic_list.json';

    try {
        const response = await fetch(jsonUrl);
        const imageCategories: { [key: string]: string[] } = await response.json();

        const srcArray = (imageCategories[yccCatId] || []).sort(() => Math.random() - 0.5);
        console.log(srcArray)
        return srcArray.length ? srcArray : imageCategories['1'];
    } catch (error) {
        console.error('Failed to fetch image categories:', error);
        return [];
    }
};
