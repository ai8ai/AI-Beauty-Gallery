// Category
import { CatInterface, Cat2SubMap } from '@/types';
import { genJpg5, genGifList, genJpgList } from './genImageList'

const i = () => Math.floor(Math.random() * 5) + 1;

export const HomeList: CatInterface[] = [
    { id: "isce", title: "Scenic Vibes", cover: genJpgList("aicat/scene/sc", 5)[0] },
    { id: "iart", title: "Artistic Elegance", cover: genJpgList("aicat/art/ar", 5)[0] },
    { id: "ipro", title: "Power Dressing, Professional", cover: genJpgList("aicat/pro/pr", 5)[0] },
    { id: "i2", title: "Dynamic Groups of Beauties", cover: genJpgList("aicat/i2/i2", 5)[0] },
    { id: "iback", title: "Back & Beyond & Butt", cover: genJpg5("aicat/back")[0] },
    { id: "icar", title: "Elegance with Luxury Rides", cover: genJpgList("aicat/car/ca", 5)[0] },
    { id: "iout", title: "Nature & Adventure", cover: genJpgList("aicat/out/ou", 5)[0] },
    { id: "igif", title: "Motion Magic", shorttitle: "GIF", cover: genGifList("aicat/gif/gc", 5)[0] },
    { id: "iche", title: "Timeless Cheongsam", cover: genJpgList("aicat/che/ch", 5)[0] },
    { id: "iflo", title: "Floral", cover: genJpgList("aicat/flo/fl", 5)[0] },
    { id: "ilolita", title: "Lolita", cover: genJpgList("aicat/lolita/lo", 5)[0] },
    { id: "ispa", title: "Chic Spaghetti Straps", cover: genJpgList("aicat/spaghetti/sp", 5)[0] },
    { id: "istr", title: "Elegant Strapless", cover: genJpgList("aicat/strapless/st", 5)[0] },
    { id: "ideco", title: "Sublime Décolleté", cover: genJpgList("aicat/deco/de", 5)[0] },

    { id: "ibbs", title: "Cozy Living Bed Bath & Sofa", cover: genJpg5("aicat/bbs", 5)[0] },
    { id: "ired", title: "Red Hot Desire", cover: genJpg5("aicat/red", 5)[0] },
    { id: "itravel", title: "Travel", cover: genJpg5("aicat/travel", 5)[0] },
    { id: "isparkling", title: "Sparkling Seduction", cover: genJpg5("aicat/spar")[0] },
];

export const Cat2Sub: Cat2SubMap = {
    isce: [
        { id: "sc1", title: "Sea", folder: "sea", cover: genJpgList("isce/sea/se", 5)[0] },
        { id: "sc2", title: "Lone", folder: "lone", cover: genJpgList("isce/lone/lo", 5)[0] },
        { id: "sc3", title: "Land", folder: "land", cover: genJpgList("isce/land/la", 5)[0] },
    ],

    iche: [
        { id: "ich1", title: "Captivating Charisma", folder: "charisma", cover: genJpgList("iche/charisma/ch", 5)[0] },
        { id: "ich2", title: "Timeless Classics", folder: "classic", cover: genJpgList("iche/classic/cl", 5)[0] },
        { id: "ich3", title: "Effortless Elegance", folder: "elegance", cover: genJpgList("iche/elegance/el", 5)[0] },
        { id: "ich4", title: "Ethereal Enchantment", folder: "enchantment", cover: genJpgList("iche/enchantment/en", 5)[0] },
        { id: "ich5", title: "Shadows & Secrets", folder: "mystery", cover: genJpgList("iche/mystery/my", 5)[0] },
        { id: "ich6", title: "Stunning", folder: "stunning", cover: genJpg5("iche/stunning")[0] },
    ],

    ilolita: [
        { id: "ilo1", title: "Glass", folder: "glass", cover: genJpgList("ilolita/glass/gl", 5)[0] },
        { id: "ilo2", title: "Gym", folder: "gym", cover: genJpgList("ilolita/gym/gy", 5)[0] },
        { id: "ilo3", title: "Reading", folder: "reading", cover: genJpgList("ilolita/reading/re", 5)[0] },
        { id: "ilo4", title: "Study", folder: "study", cover: genJpgList("ilolita/study/st", 5)[0] },
        { id: "ilo5", title: "Presentation", folder: "presentation", cover: genJpgList("ilolita/presentation/pr", 5)[0] },
    ],

    itravel: [
        { id: "itr1", title: "In the Air", folder: "air", cover: genJpgList("itravel/air/ai", 5)[0] },
        { id: "itr2", title: "Railway", folder: "rail", cover: genJpgList("itravel/rail/ra", 5)[0] },
        { id: "itr3", title: "Vehicle Elegance", folder: "vehicle", cover: genJpgList("itravel/vehicle/ve", 5)[0] },
        { id: "itr4",title: "Stunning", folder: "stunning", cover: genJpg5("itravel/stunning", 5)[0] },
    ],

    iflo: [
        { id: "ifl1", title: "Vogue Décolleté", folder: "deco", cover: genJpgList("iflo/deco/de", 5)[0] },
        { id: "ifl2", title: "Ethereal Enchantment", folder: "enchantment", cover: genJpgList("iflo/enchantment/en", 5)[0] },
        { id: "ifl3", title: "Sensual Allure", folder: "sexy", cover: genJpgList("iflo/sexy/se", 5)[0] },
        { id: "ifl4", title: "Seaside Chic", folder: "swim", cover: genJpgList("iflo/swim/sw", 5)[0] },
        { id: "ifl5",title: "Stunning", folder: "stunning", cover: genJpg5("iflo/stunning", 5)[0] },
    ],

    igif: [
        { id: "igi1", title: "GIF", folder: "gif", cover: genGifList("igif/gif/gi", 5)[0] },
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
        { id: "bb1", title: "Stunning", folder: "stunning", cover: genJpg5("ibbs/stunning")[0] },
        { id: "bb2", title: "Sultry", folder: "sultry", cover: genJpg5("ibbs/sultry")[0] },
        { id: "bb7", title: "Sparkling", folder: "sparkling", cover: genJpgList("ibbs/sequins/se", 5)[0] },
        { id: "bb9", title: "Strapless", folder: "strapless", cover: genJpgList("ibbs/strapless/se", 5)[0] },
        { id: "bb3", title: "Red", folder: "red", cover: genJpgList("ibbs/red/re", 5)[0] },
        { id: "bb4", title: "White", folder: "white", cover: genJpgList("ibbs/white/wh", 5)[0] },
        { id: "bb5", title: "Lying Down", folder: "lying", cover: genJpgList("ibbs/lying/ly", 5)[0] },
        { id: "bb6", title: "Lace", folder: "lace", cover: genJpgList("ibbs/lace/la", 5)[0] },
        { id: "bb8", title: "Minimal", folder: "mini", cover: genJpg5("ibbs/mini")[0] },
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
        { id: "isp1", title: "Stunning", folder: "stunning", cover: genJpgList("ispa/stunning/st", 5)[0] },
        { id: "isp2", title: "Sultry", folder: "sultry", cover: genJpgList("ispa/sultry/su", 5)[0] },
        { id: "isp3", title: "Red Green Yellow", folder: "trafficlight", cover: genJpgList("ispa/trafficlight/tr", 5)[0] },
        { id: "isp4", title: "Violet", folder: "violet", cover: genJpgList("ispa/violet/vi", 5)[0] },
        { id: "isp5", title: "Pink", folder: "pink", cover: genJpgList("ispa/pink/pi", 5)[0] },
        { id: "isp6", title: "Lace", folder: "lace", cover: genJpgList("ispa/lace/la", 5)[0] },
        { id: "isp7", title: "Nude", folder: "nude", cover: genJpgList("ispa/nude/na", 5)[0] },
        { id: "isp9", title: "Floral", folder: "floral", cover: genJpgList("ispa/floral/fl", 5)[0] },
        { id: "isp10", title: "Elegance", folder: "elegance", cover: genJpgList("ispa/elegance/el", 5)[0] },
        { id: "isp11", title: "Camisole", folder: "camisole", cover: genJpgList("ispa/camisole/ca", 5)[0] },
        { id: "isp12", title: "Bodycon", folder: "bodycon", cover: genJpgList("ispa/bodycon/bo", 5)[0] },
        { id: "isp13", title: "Blue", folder: "blue", cover: genJpgList("ispa/blue/bl", 5)[0] },
        { id: "isp14", title: "Black", folder: "black", cover: genJpgList("ispa/black/bl", 5)[0] },
        { id: "isp15", title: "Backless", folder: "backless", cover: genJpgList("ispa/backless/ba", 5)[0] },
    ],
    
    ired: [
        { id: "ire1", title: "Bakunyuu", folder: "bakunyuu", cover: genJpg5("ired/bakunyuu")[0] },
        { id: "ire2", title: "Deco", folder: "deco", cover: genJpg5("ired/deco")[0] },
        { id: "ire3", title: "Elegance", folder: "elegance", cover: genJpg5("ired/elegance")[0] },
        { id: "ire4", title: "Sheer Tights", folder: "sheertights", cover: genJpg5("ired/sheertights")[0] },
        { id: "ire5", title: "Spaghetti", folder: "spaghetti", cover: genJpg5("ired/spaghetti")[0] },
        { id: "ire6", title: "Strapless", folder: "strapless", cover: genJpg5("ired/strapless")[0] },
        { id: "ire7", title: "Sultry", folder: "sultry", cover: genJpg5("ired/sultry")[0] },
    ],
    
    istr: [
        { id: "ist1", title: "Bakunyuu", folder: "bakunyuu", cover: genJpg5("istr/bakunyuu")[0] },
        { id: "ist2", title: "Elegance", folder: "elegance", cover: genJpg5("istr/elegance")[0] },
        { id: "ist3", title: "Floral", folder: "floral", cover: genJpg5("istr/floral")[0] },
        { id: "ist4", title: "Nude", folder: "nude", cover: genJpg5("istr/nude")[0] },
        { id: "ist5", title: "Night", folder: "night", cover: genJpg5("istr/night")[0] },
        { id: "ist6", title: "Sparkling Seduction", folder: "sparkling", cover: genJpg5("istr/sparkling")[0] },
        { id: "ist7", title: "Minimalist Sophistication", folder: "mini", cover: genJpg5("istr/mini")[0] },
        { id: "ist8", title: "Sultry", folder: "sultry", cover: genJpg5("istr/sultry")[0] },
        { id: "ist9", title: "Tea Time", folder: "teatime", cover: genJpg5("istr/teatime")[0] },
        { id: "ist10",title: "Stunning", folder: "stunning", cover: genJpg5("istr/stunning")[0] },
    ],    

    ideco: [
        { id: "ide1", title: "Bakunyuu", folder: "bakunyuu", cover: genJpg5("ideco/bakunyuu")[0] },
        { id: "ide2", title: "Daily Life", folder: "dailylife", cover: genJpg5("ideco/dailylife")[0] },
        { id: "ide3", title: "Cozy Chic & Homely Elegance", folder: "elegance", cover: genJpg5("ideco/elegance")[0] },
        { id: "ide4", title: "Flirty Floral Charms", folder: "floral", cover: genJpg5("ideco/floral")[0] },
        { id: "ide5", title: "Timeless Grace Lace", folder: "lace", cover: genJpg5("ideco/lace")[0] },
        { id: "ide6", title: "Night", folder: "night", cover: genJpg5("ideco/night")[0] },
        { id: "ide7", title: "Sparkling Seduction", folder: "sparkling", cover: genJpg5("ideco/sparkling")[0] },
        { id: "ide8", title: "Minimalist Sophistication", folder: "mini", cover: genJpg5("ideco/mini")[0] },
        { id: "ide9", title: "Sultry", folder: "sultry", cover: genJpg5("ideco/sultry")[0] },
        { id: "ide10",title: "Stunning", folder: "stunning", cover: genJpg5("ideco/stunning", 5)[0] },
    ],

    isparkling: [
        { id: "isp1", title: "Bakunyuu", folder: "bakunyuu", cover: genJpg5("isparkling/bakunyuu")[0] },
        { id: "isp2", title: "Sparkling Car Model", folder: "carmodel", cover: genJpg5("isparkling/carmodel")[0] },
        { id: "isp3", title: "Daily Life", folder: "dailylife", cover: genJpg5("isparkling/dailylife")[0] },
        { id: "isp4", title: "Cozy Chic & Homely Elegance", folder: "elegance", cover: genJpg5("isparkling/elegance")[0] },
        { id: "isp5", title: "Flirty Fishbeauty Charms", folder: "fish", cover: genJpg5("isparkling/fish")[0] },
        { id: "isp6", title: "Timeless Grace Night Club", folder: "nightclub", cover: genJpg5("isparkling/nightclub")[0] },
        { id: "isp7", title: "Night", folder: "night", cover: genJpg5("isparkling/night")[0] },
        { id: "isp8", title: "Sultry", folder: "sultry", cover: genJpg5("isparkling/sultry")[0] },
    ],
};

