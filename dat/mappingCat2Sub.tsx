import { genImgList } from './genImageList';
import CatInterface from '@/types';

type SubCategoryConfig = Record<string, CatInterface[]>;

export const subCatMapping: SubCategoryConfig = {
    scene: [
        { id: "SpecialBack",   title: "Elegance from Behind", cover: genImgList("abspecialtaste/back/ba", 10)[0], path: "abspecialtaste/back/ba", count: "10" },
        { id: "SpecialFinger", title: "Graceful Fingertips", cover: genImgList("abspecialtaste/finger/fi", 10)[0], path: "abspecialtaste/finger/fi", count: "10" },
    ],
    art: [
        { id: "HolidayLu", title: "Chinese New Year", cover: genImgList("abholiday/luneryear/lu", 10)[0], count: "30", path: "abholiday/luneryear/lu" },
    ],
    default: [
        { id: "ELSef1", title: "Amazing Start!", cover: "https://ai8ai.github.io/abcat/default/yc1.jpg" },
        { id: "ELSef2", title: "Explore the Beauty", cover: "https://ai8ai.github.io/abcat/default/yc2.jpg" },
    ],
};
