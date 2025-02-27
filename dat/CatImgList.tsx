// Category
import { CatInterface, Cat2SubMap } from '@/types';
import { genJpgList } from './genImageList'

export const HomeList: CatInterface[] = [
    { id: "isce", title: "Scene", cover: genJpgList("aicat/scene/sc", 5)[0] },
    { id: "iart", title: "Art", cover: genJpgList("aicat/art/ar", 5)[0] },
    { id: "ibbs", title: "Bed Bath Sofa", cover: genJpgList("aicat/bbs/bb", 5)[0] },
    { id: "ipro", title: "Business Attire", cover: genJpgList("aicat/pro/pr", 5)[0] },
    { id: "i2", title: "Group", cover: genJpgList("aicat/i2/i2", 5)[0] },
    { id: "iback", title: "Back & Butt", cover: genJpgList("aicat/back/ba", 5)[0] },
    { id: "icar", title: "Car", cover: genJpgList("aicat/car/ca", 5)[0] },
    { id: "iout", title: "Outdoor", cover: genJpgList("aicat/out/ou", 5)[0] },
    // { id: "strapless", title: "Strapless", cover: genImgList("aicat/strapless/st", 5)[0] },
    // { id: "spagetti", title: "Spagetti", cover: genImgList("aicat/spagetti/sp", 5)[0] },
];

export const Cat2Sub: Cat2SubMap = {
    isce: [
        { id: "sc1", title: "Sea", folder: "sea", cover: genJpgList("isce/sea/se", 5)[0] },
        { id: "sc2", title: "Lone", folder: "lone", cover: genJpgList("isce/lone/lo", 5)[0] },
        { id: "sc3", title: "Land", folder: "land", cover: genJpgList("isce/land/la", 5)[0] },
    ],

    iout: [
        { id: "sc1", title: "Snow Field", folder: "sea", cover: genJpgList("iout/snow/sn", 5)[0] },
        { id: "sc2", title: "Swimming Suit", folder: "lone", cover: genJpgList("iout/swim/sw", 5)[0] },
        { id: "sc3", title: "Outdoor Life", folder: "field", cover: genJpgList("iout/field/fi", 5)[0] },
    ],

    i2: [
        { id: "sc1", title: "Two", folder: "two", cover: genJpgList("i2/two/tw", 5)[0] },
        { id: "sc2", title: "More", folder: "more", cover: genJpgList("i2/more/mo", 5)[0] },
    ],

    iback: [
        { id: "sc1", title: "Butt", folder: "butt", cover: genJpgList("iback/butt/bu", 5)[0] },
        { id: "sc2", title: "Back", folder: "back", cover: genJpgList("iback/back/ba", 5)[0] },
    ],

    iart: [
        { id: "sc1", title: "Face", folder: "face", cover: genJpgList("iart/face/fa", 5)[0] },
        { id: "sc2", title: "Flower", folder: "flower", cover: genJpgList("iart/flower/fl", 5)[0] },
        { id: "sc3", title: "Sketch & Hand-drawing", folder: "sketch", cover: genJpgList("iart/sketch/sk", 5)[0] },
        { id: "sc4", title: "Human", folder: "human", cover: genJpgList("iart/human/hu", 5)[0] },
        { id: "sc5", title: "Leg", folder: "leg", cover: genJpgList("iart/leg/le", 5)[0] },
        { id: "sc6", title: "Lips", folder: "lips", cover: genJpgList("iart/lips/li", 5)[0] },
        { id: "sc7", title: "Nature", folder: "nature", cover: genJpgList("iart/nature/na", 5)[0] },
    ],

    icar: [
        { id: "sc1", title: "Stunning", folder: "stunning", cover: genJpgList("icar/stunning/st", 5)[0] },
        { id: "sc2", title: "Model", folder: "model", cover: genJpgList("icar/model/mo", 5)[0] },
    ],

    ibbs: [
        { id: "bb1", title: "Stunning", folder: "stunning", cover: genJpgList("ibbs/stunning/st", 5)[0] },
        { id: "bb2", title: "Black", folder: "black", cover: genJpgList("ibbs/black/bl", 5)[0] },
        { id: "bb3", title: "Red", folder: "red", cover: genJpgList("ibbs/red/re", 5)[0] },
        { id: "bb4", title: "White", folder: "white", cover: genJpgList("ibbs/white/wh", 5)[0] },
        { id: "bb5", title: "Lying Down", folder: "lying", cover: genJpgList("ibbs/lying/ly", 5)[0] },
        { id: "bb6", title: "Lace", folder: "lace", cover: genJpgList("ibbs/lace/la", 5)[0] },
        { id: "bb7", title: "Sequins", folder: "sequins", cover: genJpgList("ibbs/sequins/se", 5)[0] },
        { id: "bb8", title: "Alien", folder: "alien", cover: genJpgList("ibbs/alien/al", 5)[0] },
    ],

    ipro: [
        { id: "pr1", title: "Stunning", folder: "stunning", cover: genJpgList("ipro/stunning/st", 5)[0] },
        { id: "pr2", title: "Suite", folder: "suite", cover: genJpgList("ipro/suite/su", 5)[0] },
        { id: "pr3", title: "Shirt", folder: "shirt", cover: genJpgList("ipro/shirt/sh", 5)[0] },
        { id: "pr4", title: "Professional", folder: "professional", cover: genJpgList("ipro/professional/pr", 5)[0] },
        { id: "pr5", title: "Office", folder: "office", cover: genJpgList("ipro/office/of", 5)[0] },
        { id: "pr6", title: "Classroom", folder: "classroom", cover: genJpgList("ipro/classroom/cl", 5)[0] },
    ],
};

