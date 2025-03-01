// Category
import { CatInterface, Cat2SubMap } from '@/types';
import { genGifList, genJpgList } from './genImageList'

export const HomeList: CatInterface[] = [
    { id: "isce", title: "Scenic Vibes", cover: genJpgList("aicat/scene/sc", 5)[0] },
    { id: "iart", title: "Artistic Elegance", cover: genJpgList("aicat/art/ar", 5)[0] },
    { id: "ibbs", title: "Cozy Living Bed Bath & Sofa", cover: genJpgList("aicat/bbs/bb", 5)[0] },
    { id: "ipro", title: "Power Dressing, Professional", cover: genJpgList("aicat/pro/pr", 5)[0] },
    { id: "i2", title: "Dynamic Groups of Beauties", cover: genJpgList("aicat/i2/i2", 5)[0] },
    { id: "iback", title: "Back & Beyond & Butt", cover: genJpgList("aicat/back/ba", 5)[0] },
    { id: "icar", title: "Elegance with Luxury Rides", cover: genJpgList("aicat/car/ca", 5)[0] },
    { id: "iout", title: "Nature & Adventure", cover: genJpgList("aicat/out/ou", 5)[0] },
    { id: "igif", title: "Motion Magic", shorttitle: "GIF", cover: genGifList("aicat/gif/gc", 5)[0] },
    { id: "iche", title: "Timeless Cheongsam", cover: genJpgList("aicat/che/ch", 5)[0] },
    { id: "iflo", title: "Floral", cover: genJpgList("aicat/flo/fl", 5)[0] },
    { id: "ilolita", title: "Lolita", cover: genJpgList("aicat/lolita/lo", 5)[0] },
    { id: "itravel", title: "Travel", cover: genJpgList("aicat/travel/tc", 5)[0] },
    { id: "ispa", title: "Chic Spaghetti Straps", cover: genJpgList("aicat/spaghetti/sp", 5)[0] },

    // { id: "strapless", title: "Elegant Strapless", cover: genJpgList("aicat/strapless/st", 5)[0] },
];

export const Cat2Sub: Cat2SubMap = {
    isce: [
        { id: "sc1", title: "Sea", folder: "sea", cover: genJpgList("isce/sea/se", 5)[0] },
        { id: "sc2", title: "Lone", folder: "lone", cover: genJpgList("isce/lone/lo", 5)[0] },
        { id: "sc3", title: "Land", folder: "land", cover: genJpgList("isce/land/la", 5)[0] },
    ],

    iche: [
        { id: "charisma", title: "Captivating Charisma",  folder: "charisma",  cover: genJpgList("iche/charisma/ch", 5)[0] },
        { id: "classic", title: "Timeless Classics",  folder: "classic",  cover: genJpgList("iche/classic/cl", 5)[0] },
        { id: "elegance", title: "Effortless Elegance",  folder: "elegance",  cover: genJpgList("iche/elegance/el", 5)[0] },
        { id: "enchantment", title: "Ethereal Enchantment",  folder: "enchantment",  cover: genJpgList("iche/enchantment/en", 5)[0] },
        { id: "mystery", title: "Shadows & Secrets",  folder: "mystery",  cover: genJpgList("iche/mystery/my", 5)[0] },
    ],


    ilolita: [
        { id: "charisma", title: "Glass",  folder: "glass",  cover: genJpgList("ilolita/glass/gl", 5)[0] },
        { id: "classic", title: "Gym",  folder: "gym",  cover: genJpgList("ilolita/gym/gy", 5)[0] },
        { id: "elegance", title: "Reading",  folder: "reading",  cover: genJpgList("ilolita/reading/re", 5)[0] },
        { id: "enchantment", title: "Study",  folder: "study",  cover: genJpgList("ilolita/study/st", 5)[0] },
        { id: "mystery", title: "Presentation",  folder: "presentation",  cover: genJpgList("ilolita/presentation/pr", 5)[0] },
    ],


    itravel: [
        { id: "charisma", title: "In the Air",  folder: "air",  cover: genJpgList("itravel/air/ai", 5)[0] },
        { id: "classic", title: "Railway",  folder: "rail",  cover: genJpgList("itravel/rail/ra", 5)[0] },
        { id: "elegance", title: "Vehicle Elegance",  folder: "vehicle",  cover: genJpgList("itravel/vehicle/ve", 5)[0] },
    ],

    iflo: [
        { id: "deco", title: "Vogue Décolleté",  folder: "deco",  cover: genJpgList("iflo/deco/de", 5)[0] },
        { id: "enchantment", title: "Ethereal Enchantment",  folder: "enchantment",  cover: genJpgList("iflo/enchantment/en", 5)[0] },
        { id: "classic", title: "Sensual Allure",  folder: "sexy",  cover: genJpgList("iflo/sexy/se", 5)[0] },
        { id: "elegance", title: "Seaside Chic",  folder: "swim",  cover: genJpgList("iflo/swim/sw", 5)[0] },
    ],

    igif: [
        { id: "sc1", title: "GIF", folder: "gif", cover: genGifList("igif/gif/gi", 5)[0] },
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

    ispa: [
        { id: "sp1",  title: "Stunning", folder: "stunning", cover: genJpgList("ispa/stunning/st", 5)[0] },
        { id: "sp2",  title: "Sultry",   folder: "sultry", cover: genJpgList("ispa/sultry/su", 5)[0] },
        { id: "sp3",  title: "Red Green Yellow", folder: "trafficlight", cover: genJpgList("ispa/trafficlight/tr", 5)[0] },
        { id: "sp4",  title: "Violet", folder: "violet", cover: genJpgList("ispa/violet/vi", 5)[0] },
        { id: "sp5",  title: "Pink", folder: "pink", cover: genJpgList("ispa/pink/pi", 5)[0] },
        { id: "sp6",  title: "Lace", folder: "lace", cover: genJpgList("ispa/lace/la", 5)[0] },
        { id: "sp11", title: "Nake", folder: "nake", cover: genJpgList("ispa/nake/na", 5)[0] },
        { id: "sp22", title: "Haltertop", folder: "haltertop", cover: genJpgList("ispa/haltertop/ha", 5)[0] },
        { id: "sp31", title: "Floral", folder: "floral", cover: genJpgList("ispa/floral/fl", 5)[0] },
        { id: "sp41", title: "Elegance", folder: "elegant", cover: genJpgList("ispa/elegant/el", 5)[0] },
        { id: "sp51", title: "Camisole", folder: "camisole", cover: genJpgList("ispa/camisole/ca", 5)[0] },
        { id: "sp61", title: "Bodycon", folder: "bodycon", cover: genJpgList("ispa/bodycon/bo", 5)[0] },
        { id: "sp61", title: "Blue", folder: "blue", cover: genJpgList("ispa/blue/bl", 5)[0] },
        { id: "sp61", title: "Black", folder: "black", cover: genJpgList("ispa/black/bl", 5)[0] },
        { id: "sp61", title: "Backless", folder: "backless", cover: genJpgList("ispa/backless/ba", 5)[0] },
    ],
};

