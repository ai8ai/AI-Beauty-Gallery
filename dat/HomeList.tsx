// Home Category
import CatInterface  from '@/types';
import {genImgList} from './genImageList'

const HomeList: CatInterface[] = [
    { id: "scene", title: "Scene",cover: genImgList("aicat/scene/sc", 10)[0], path: "aicat/scene/sc",count: "10" },
    { id: "art",   title: "Art",  cover: genImgList("aicat/art/ar",   10)[0], path: "aicat/art/ar",  count: "10" },
];

export default HomeList;
