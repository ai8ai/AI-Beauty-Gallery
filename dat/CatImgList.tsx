// Category
import { CatInterface, SubCategoryConfig } from '@/types';
import { genImgList } from './genImageList'

export const HomeList: CatInterface[] = [
    { id: "scene",  title: "Scene",             cover: genImgList("aicat/scene/sc", 10)[0] },
    { id: "art",    title: "Art",               cover: genImgList("aicat/art/ar", 10)[0] },
    { id: "bbs",    title: "Bed Bath Sofa",     cover: genImgList("aicat/bbs/bb", 5)[0] },
    { id: "pro",    title: "Business Attire",   cover: genImgList("aicat/pro/pr", 5)[0] },
    { id: "i2",     title: "Group",             cover: genImgList("aicat/i2/i2", 5)[0] },
    { id: "back",   title: "Back & Butt",       cover: genImgList("aicat/back/ba", 5)[0] },
    { id: "car",    title: "Car",               cover: genImgList("aicat/car/ca", 5)[0] },
    // { id: "strapless", title: "Strapless", cover: genImgList("aicat/strapless/st", 5)[0] },
    // { id: "spagetti", title: "Spagetti", cover: genImgList("aicat/spagetti/sp", 5)[0] },
];

export const Cat2Sub2Img: SubCategoryConfig = {
    scene: generateSubCategory("isce", [
        { id: "sc1", title: "Sea",  count: "10",  key: "sea/se" },
        { id: "sc2", title: "Lone", count: "10",  key: "lone/lo" },
        { id: "sc3", title: "Land", count: "10",  key: "land/la" },
    ]),
    i2: generateSubCategory("i2", [
        { id: "i21", title: "Two",  count: "10",  key: "two/tw" },
        { id: "i22", title: "More", count: "10",  key: "more/mo" },
    ]),
    back: generateSubCategory("iback", [
        { id: "ba1", title: "Butt",  count: "10",  key: "butt/bu" },
        { id: "ba2", title: "Back", count: "30",  key: "back/ba" },
    ]),
    art: generateSubCategory("iart", [
        { id: "ar1", title: "Face",   count: "10",  key: "face/fa" },
        { id: "ar2", title: "Flower", count: "10",  key: "flower/fl" },
        { id: "ar3", title: "History",count: "10",  key: "history/hi" },
        { id: "ar4", title: "Human",  count: "10",  key: "human/hu" },
        { id: "ar5", title: "Leg",    count: "5",  key: "leg/le" },
        { id: "ar6", title: "Lips",   count: "10",  key: "lips/li" },
        { id: "ar7", title: "Nature", count: "10",  key: "nature/na" },
    ]),
    bbs: generateSubCategory("ibbs", [
        { id: "bb1", title: "Stunning", count: "10",  key: "stunning/st" },
        { id: "bb2", title: "Black",    count: "10",  key: "black/bl" },
        { id: "bb3", title: "Red",      count: "10",  key: "red/re" },
        { id: "bb4", title: "White",    count: "10",  key: "white/wh" },
        { id: "bb5", title: "Lying Down",count:"10",  key: "lying/ly" },
        { id: "bb6", title: "Lace",     count: "10",  key: "lace/la" },
        { id: "bb7", title: "Sequins",  count: "10",  key: "sequins/se" },
        { id: "bb8", title: "Alien",    count: "10",  key: "alien/al" },
    ]),
    pro: generateSubCategory("ipro", [
        { id: "pr1", title: "Stunning", count: "10",  key: "stunning/st" },
        { id: "pr2", title: "Suite",    count: "10",  key: "suite/su" },
        { id: "pr3", title: "Shirt",      count: "10",  key: "shirt/sh" },
        { id: "pr4", title: "Professional",count: "10",  key: "professional/pr" },
        { id: "pr5", title: "Office",count:"10",  key: "office/of" },
        { id: "pr6", title: "Classroom",     count: "10",  key: "classroom/cl" },
    ]),
    car: generateSubCategory("icar", [
        { id: "ca1", title: "Stunning", count: "20",  key: "stunning/st" },
        { id: "ca2", title: "Model",    count: "20",  key: "model/mo" },
    ]),
    
};

// Helper function to generate subcategory data
function generateSubCategory(subBasePath: string, items: { id: string;      title: string;      count: string;      key: string }[]) {
    return items.map(({ id, title, count,  key }) => ({
        id,
        title,
        count,
        cover: genImgList(`${subBasePath}/${key}`, 10)[0],
        path: `${subBasePath}/${key}`,
    }));
}
