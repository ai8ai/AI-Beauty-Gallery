// Home Category
import { CatInterface, SubCategoryConfig } from '@/types';
import { genImgList } from './genImageList'

export const HomeList: CatInterface[] = [
    { id: "scene", title: "Scene", cover: genImgList("aicat/scene/sc", 10)[0] },
    { id: "art", title: "Art", cover: genImgList("aicat/art/ar", 10)[0] },
];


export const Cat2Sub2Img: SubCategoryConfig = {
    scene: [
        { id: "sc1", title: "Daily Fresh & Hot Trends", cover: genImgList("abfresh/ycc/yf", 20)[0], count: "10", path: "abfresh/ycc/yf" },
        { id: "sc2", title: "Angelically Innocent", cover: genImgList("abycc/pure/pu", 5)[0], count: "10", path: "abycc/pure/pu" },
    ],
    art: [
        { id: "ar2", title: "Daily Fresh & Hot Trends", cover: genImgList("abfresh/syz/sf", 20)[0], count: "10", path: "abfresh/syz/sf" },
        { id: "ar1", title: "Bare & Beautiful", cover: genImgList("absyz/strapless/st", 10)[0], count: "10", path: "absyz/strapless/st" },
    ],
};


