// Category
import { CatInterface, SubCategoryConfig } from '@/types';
import { genImgList } from './genImageList'

export const HomeList: CatInterface[] = [
    { id: "scene", title: "Scene", cover: genImgList("aicat/scene/sc", 10)[0] },
    { id: "art", title: "Art", cover: genImgList("aicat/art/ar", 10)[0] },
    { id: "bbs", title: "Bed Bath Sofa", cover: genImgList("aicat/bbs/bb", 5)[0] },
    { id: "business", title: "Business Attire", cover: genImgList("aicat/business/bu", 5)[0] },
    { id: "i2", title: "Group", cover: genImgList("aicat/i2/i2", 5)[0] },
    { id: "strapless", title: "Strapless", cover: genImgList("aicat/strapless/st", 5)[0] },
    { id: "spagetti", title: "Spagetti", cover: genImgList("aicat/spagetti/sp", 5)[0] },
];


export const Cat2Sub2Img: SubCategoryConfig = {
    
    scene: [
        { id: "sc1", title: "Sea", cover:  genImgList("isce/sea/se", 10)[0], count: "10", path: "isce/sea/se" },
        { id: "sc2", title: "Lone", cover: genImgList("isce/lone/lo",10)[0], count: "10", path: "isce/lone/lo" },
        { id: "sc3", title: "Land", cover: genImgList("isce/land/la",10)[0], count: "10", path: "isce/land/la" },
    ],
    art: [
        { id: "ar1", title: "face", cover: genImgList("iart/face/fa", 10)[0], count: "10", path: "iart/face/fa" },
        { id: "ar2", title: "flower", cover: genImgList("iart/flower/fl", 10)[0], count: "10", path: "iart/flower/fl" },
        { id: "ar3", title: "history", cover: genImgList("iart/history/hi", 10)[0], count: "10", path: "iart/history/hi" },
        { id: "ar4", title: "human", cover: genImgList("iart/human/hu", 10)[0], count: "10", path: "iart/human/hu" },
        { id: "ar5", title: "leg", cover: genImgList("iart/leg/le", 10)[0], count: "10", path: "iart/leg/le" },
        { id: "ar6", title: "lips", cover: genImgList("iart/lips/li", 10)[0], count: "10", path: "iart/lips/li" },
        { id: "ar7", title: "nature", cover: genImgList("iart/nature/na", 10)[0], count: "10", path: "iart/nature/na" },
    ],
    bbs: [
        { id: "bb1", title: "Stunning", cover: genImgList("ibbs/stunning/st", 10)[0], count: "10", path: "ibbs/stunning/st" },
        { id: "bb2", title: "Black",    cover: genImgList("ibbs/black/bl",10)[0], count: "10", path: "ibbs//black/bl" },
        { id: "bb3", title: "Red",      cover: genImgList("ibbs/red/re",10)[0], count: "10", path: "ibbs/red/re" },
        { id: "bb4", title: "White",    cover: genImgList("ibbs/white/wh", 10)[0], count: "10", path: "ibbs/white/wh" },
        { id: "bb5", title: "Lying Down",cover:genImgList("ibbs/lying/ly",10)[0], count: "10", path: "ibbs/lying/ly" },
        { id: "bb6", title: "Lace",     cover: genImgList("ibbs/lace/la",10)[0], count: "10", path: "ibbs/lace/la" },
        { id: "bb7", title: "Sequins",  cover: genImgList("ibbs/sequins/se",10)[0], count: "10", path: "ibbs/sequins/se" },
    ],
    pro: [
        { id: "pr1", title: "Business Formal", cover:  genImgList("ipro/businessformal/se", 10)[0], count: "10", path: "ipro/sea/se" },
        { id: "pr2", title: "Lone", cover: genImgList("ipro/lone/lo",10)[0], count: "10", path: "ipro/lone/lo" },
        { id: "pr3", title: "Land", cover: genImgList("ipro/land/la",10)[0], count: "10", path: "ipro/land/la" },
    ],
    i2: [
        { id: "i21", title: "Sea", cover:  genImgList("i2/sea/se", 10)[0], count: "10", path: "i2/sea/se" },
        { id: "i22", title: "Lone", cover: genImgList("i2/lone/lo",10)[0], count: "10", path: "i2/lone/lo" },
        { id: "i23", title: "Land", cover: genImgList("i2/land/la",10)[0], count: "10", path: "i2/land/la" },
    ],
    strapless: [
        { id: "st1", title: "Sea", cover:  genImgList("istr/sea/se", 10)[0], count: "10", path: "istr/sea/se" },
        { id: "st2", title: "Lone", cover: genImgList("istr/lone/lo",10)[0], count: "10", path: "istr/lone/lo" },
        { id: "st3", title: "Land", cover: genImgList("istr/land/la",10)[0], count: "10", path: "istr/land/la" },
    ],
    spagetti: [
        { id: "sp1", title: "Sea", cover:  genImgList("ispa/sea/se", 10)[0], count: "10", path: "ispa/sea/se" },
        { id: "sp2", title: "Lone", cover: genImgList("ispa/lone/lo",10)[0], count: "10", path: "ispa/lone/lo" },
        { id: "sp3", title: "Land", cover: genImgList("ispa/land/la",10)[0], count: "10", path: "ispa/land/la" },
    ],
    
};


