// Category
import { CatInterface, Cat2SubMap } from '@/types';
import { genJpg5, genJpg55, genGifList, genJpgList } from './genImageList'

const i = () => Math.floor(Math.random() * 5) + 1;

export const HomeList: CatInterface[] = [
    { id: "istunning", title: "✨ Stunning", cover: genJpg55("aicat/main/stunning")[0] },
    { id: "isce", title: "🌅 Scenic Vibes", cover: genJpg55("aicat/main/scene")[0] },

    { id: "iart", title: "🎨 Artistic Elegance", cover: genJpgList("aicat/art/ar", 5)[0] },
    { id: "igif", title: "🎞️ Motion Magic", shorttitle: "GIF", cover: genGifList("aicat/gif/gc", 5)[0] },
    
    { id: "i2", title: "👯‍♀️ Dynamic Groups of Beauties", cover: genJpgList("aicat/i2/i2", 5)[0] },
    { id: "ilolita", title: "🍭 Lolita", cover: genJpgList("aicat/lolita/lo", 5)[0] },
    
    { id: "ibody", title: "⛰️ Beautiful Shape", cover: genJpg5("aicat/ibody")[0] },
    { id: "iche", title: "👘 Timeless Cheongsam", cover: genJpgList("aicat/che/ch", 5)[0] },
    
    { id: "isparkling", title: "💎 Sparkling Seduction", cover: genJpg5("aicat/spar")[0] },
    { id: "iss", title: "👗 Signature Styles", shorttitle: "Signature Styles", cover: genJpg5("aicat/ss")[0] },

    { id: "imm", title: "🔮 Mystic Muses", cover: genJpg5("aicat/mm")[0] },
    { id: "ihome", title: "🏡 Cozy Living Bed Bath Sofa & Home", cover: genJpg5("aicat/home", 5)[0] },

    { id: "ipro", title: "💼 Power Dressing, Professional", cover: genJpgList("aicat/pro/pr", 5)[0] },
    { id: "iout", title: "⛰️ Nature & Adventure Out", cover: genJpgList("aicat/out/ou", 5)[0] },

    { id: "ideco", title: "✨ Sublime Décolleté", cover: genJpgList("aicat/deco/de",5)[0] },
    { id: "ispa", title: "🍝 Chic Spaghetti Straps", cover: genJpgList("aicat/spaghetti/sp", 5)[0] },

    { id: "istr", title: "💃 Elegant Strapless", cover: genJpgList("aicat/strapless/st", 5)[0] },
    { id: "ired", title: "🔥 Red Hot Desire", cover: genJpg5("aicat/red", 5)[0] },

    { id: "ipast", title: "🚗 Past", cover: genJpg5("aicat/ipast")[0] },

];

export const Cat2Sub: Cat2SubMap = {
    istunning: [
        { id: "sc1", title: "👑 Elite 100", folder: "top100", cover: genJpg5("istunning/top100", 5)[0] },
        { id: "sc2", title: "🌟 Iconic 20", folder: "top20", cover: genJpg5("istunning/top20", 5)[0] },
        { id: "sc3", title: "💎 Enchanting Neighbor", folder: "nextdoor", cover: genJpg5("istunning/nextdoor", 5)[0] },
        { id: "sc4", title: "🏙️ Chic Square", folder: "square", cover: genJpg5("istunning/square", 5)[0] },
    ],
    isce: [
        { id: "sc1", title: "🌊 Majestic Seascape", folder: "sea", cover: genJpgList("isce/sea/se", 5)[0] },
        { id: "sc2", title: "🌟 Serene Solitude", folder: "lone", cover: genJpgList("isce/lone/lo", 5)[0] },
        { id: "sc3", title: "🏞️ Enchanted Landscapes", folder: "land", cover: genJpgList("isce/land/la", 5)[0] },
    ],

    iart: [
        { id: "sc1", title: "🎭 Mesmerizing Face", folder: "face", cover: genJpgList("iart/face/fa", 5)[0] },
        { id: "sc2", title: "🌸 Blooming Elegance", folder: "flower", cover: genJpgList("iart/flower/fl", 5)[0] }, 
        { id: "sc3", title: "🖌️ Artistic Grace", folder: "sketch", cover: genJpgList("iart/sketch/sk", 5)[0] },
        { id: "sc4", title: "👤 Divine Form", folder: "human", cover: genJpgList("iart/human/hu", 5)[0] },
        { id: "sc5", title: "🦵 Leggy Finger Allure", folder: "legfinger", cover: genJpgList("iart/legfinger/le", 5)[0] },
        { id: "sc6", title: "💋 Tempting Lips", folder: "lips", cover: genJpgList("iart/lips/li", 5)[0] },
        { id: "sc7", title: "🍃 Nature’s Charm", folder: "nature", cover: genJpgList("iart/nature/na", 5)[0] },
        { id: "s1", title: "💡 Light & Shadow Drama", folder: "lightandshadow", cover: genJpg5("iart/lightandshadow")[0] },
    ],
    igif: [
        { id: "igi1", title: "🎥 Motion Masterpieces", folder: "gif", cover: genGifList("igif/gif/gi", 5)[0] },
    ],

    i2: [
        { id: "sc1", title: "👯‍♀️ Dynamic Duo", folder: "two", cover: genJpgList("i2/two/tw", 5)[0] },
        { id: "sc2", title: "🎭 Glamorous Gatherings", folder: "more", cover: genJpgList("i2/more/mo", 5)[0] },
    ],
    ilolita: [
        { id: "ilo3", title: "🌟 Glamorous Diva", folder: "stunning", cover: genJpg5("ilolita/stunning")[0] },
        { id: "ilo1", title: "👓 Chic Glass Appeal", folder: "glass", cover: genJpg5("ilolita/glass")[0] },
        { id: "ilo2", title: "🏋️‍♀️ Fitness Glow", folder: "gym", cover: genJpg5("ilolita/gym")[0] },
        { id: "ilo4", title: "📖 Intellectual Charm", folder: "study", cover: genJpg5("ilolita/study")[0] },
        { id: "ilo5", title: "🎤 Showstopper Presence", folder: "presentation", cover: genJpg5("ilolita/presentation")[0] },
    ],


    ibody: [
        { id: "bb1", title: "🔙 Alluring Back View", folder: "back", cover: genJpg5("ibody/back")[0] },
        { id: "bb2", title: "🍑 Curvy & Chic Back Butt", folder: "backbutt", cover: genJpg5("ibody/backbutt")[0] },
        { id: "bb3", title: "✨ Bold & Beautiful Backless", folder: "backless", cover: genJpgList("ibody/backless/ba", 5)[0] },
        { id: "bb4", title: "🔥 Voluptuous Bakunyuu Beauty", folder: "bakunyuu", cover: genJpg5("ibody/bakunyuu")[0] },
        { id: "bb5", title: "🍑 Perfectly Sculpted Butt", folder: "butt", cover: genJpgList("ibody/butt/bu", 5)[0] },
        { id: "bb6", title: "🦵 Sleek & Sensual Legs", folder: "leg", cover: genJpg5("ibody/leg", 5)[0] }
    ],   
    iche: [
        { id: "ich1", title: "💫 Captivating Charisma", folder: "charisma", cover: genJpgList("iche/charisma/ch", 5)[0] },
        { id: "ich2", title: "👑 Timeless Elegance", folder: "classic", cover: genJpgList("iche/classic/cl", 5)[0] },
        { id: "ich3", title: "✨ Effortless Glamour", folder: "elegance", cover: genJpgList("iche/elegance/el", 5)[0] },
        { id: "ich4", title: "🦋 Ethereal Enchantment", folder: "enchantment", cover: genJpgList("iche/enchantment/en", 5)[0] },
        { id: "ich5", title: "🕶️ Shadows & Secrets", folder: "mystery", cover: genJpgList("iche/mystery/my", 5)[0] },
        { id: "ich6", title: "🌟 Dazzling Beauty", folder: "stunning", cover: genJpg5("iche/stunning")[0] },
    ],

    isparkling: [
        { id: "isp1", title: "🔥 Sensational Curves", folder: "bakunyuu", cover: genJpg5("isparkling/bakunyuu")[0] },
        { id: "isp2", title: "🚗 Glamorous Car Model", folder: "carmodel", cover: genJpg5("isparkling/carmodel")[0] },
        { id: "isp3", title: "📆 Radiant Daily Life", folder: "dailylife", cover: genJpg5("isparkling/dailylife")[0] },
        { id: "isp4", title: "🏡 Elegant Cozy Glow", folder: "elegance", cover: genJpg5("isparkling/elegance")[0] },
        { id: "isp5", title: "🐠 Enchanting Fish Beauty", folder: "fish", cover: genJpg5("isparkling/fish")[0] },
        { id: "isp6", title: "🌙 Nightclub Glam", folder: "nightclub", cover: genJpg5("isparkling/nightclub")[0] },
        { id: "isp7", title: "🌙 Midnight Spark", folder: "night", cover: genJpg5("isparkling/night")[0] },
        { id: "isp8", title: "💋 Fiery Sultry Vibes", folder: "sultry", cover: genJpg5("isparkling/sultry")[0] },
    ],
    iss: [
        { id: "isp1", title: "👙 Bikini Beauty", folder: "bikini", cover: genJpg5("iss/bikini")[0] },
        { id: "isp2", title: "🖤 Bold in Black", folder: "black", cover: genJpg5("iss/black")[0] },
        { id: "isp3", title: "🔵 Cool Blue Chic", folder: "blue", cover: genJpg5("iss/blue")[0] },
        { id: "isp4", title: "👚 Stylish Crop Top", folder: "croptop", cover: genJpg5("iss/croptop")[0] },
        { id: "isp6", title: "👖 Denim Elegance", folder: "demins", cover: genJpg5("iss/demins")[0] },
        { id: "isp7", title: "🌸 Floral Fantasy", folder: "floral", cover: genJpg5("iss/floral")[0] },
        { id: "isp8", title: "🎩 Formal Flair", folder: "formal", cover: genJpg5("iss/formal")[0] },
        { id: "isp9", title: "💚 Green & Yellow Glow", folder: "greenyellow", cover: genJpg5("iss/greenyellow")[0] },
        { id: "isp10", title: "👗 Halter Top Charm", folder: "haltertop", cover: genJpg5("iss/haltertop")[0] },
        { id: "isp11", title: "💎 High Neck Halter Elegance", folder: "highneckhalter", cover: genJpg5("iss/highneckhalter")[0] },
        { id: "isp12", title: "🕊️ Lace Grace", folder: "lace", cover: genJpg5("iss/lace")[0] },
        { id: "isp13", title: "💖 Pretty in Pink", folder: "pink", cover: genJpg5("iss/pink")[0] },
        { id: "isp14", title: "🧥 Trendy Turtleneck", folder: "turtleneck", cover: genJpg5("iss/turtleneck")[0] },
        { id: "isp15", title: "💜 Violet Vibes", folder: "violet", cover: genJpg5("iss/violet")[0] },
    ],

    imm: [
        { id: "imp1", title: "🤫 Mysterious Chuppi", folder: "chuppi", cover: genJpg5("imm/chuppi")[0] },
        { id: "imp2", title: "🎭 Stunning Cosplay", folder: "cosplay", cover: genJpg5("imm/cosplay")[0] },
        { id: "imp3", title: "👗 Chic Mini Dress", folder: "mini", cover: genJpg5("imm/mini")[0] },
        { id: "imp4", title: "🏡 Girl Next Door", folder: "nextdoor", cover: genJpg5("imm/nextdoor")[0] },
        { id: "imp5", title: "🌙 Midnight Glam", folder: "night", cover: genJpg5("imm/night")[0] },
        { id: "imp6", title: "💃 Elite Socialite", folder: "socialite", cover: genJpg5("imm/socialite")[0] },
    ],
    ihome: [
        { id: "bb1", title: "🛁 Luxurious Bath Retreat", folder: "bath", cover: genJpg5("ihome/bath")[0] },
        { id: "bb2", title: "🛏️ Cozy & Elegant Bedroom", folder: "bed", cover: genJpg5("ihome/bed")[0] },
        { id: "bb7", title: "💎 Dazzling Sparkling Glam", folder: "sparkling", cover: genJpg5("ihome/sparkling")[0] },
        { id: "bb9", title: "🏡 Chic & Modern Home Office", folder: "homeoffice", cover: genJpg5("ihome/homeoffice")[0] },
        { id: "bb3", title: "🔴 Bold & Fiery Red Passion", folder: "red", cover: genJpg5("ihome/red")[0] },
        { id: "bb4", title: "🍽️ Sleek & Stylish Kitchen", folder: "kitchen", cover: genJpg5("ihome/kitchen")[0] },
        { id: "bb5", title: "🛋️ Serene & Sophisticated Living", folder: "living", cover: genJpg5("ihome/living")[0] },
        { id: "bb6", title: "🌿 Breathtaking Outdoor Escape", folder: "outdoor", cover: genJpg5("ihome/outdoor")[0] },
        { id: "bb8", title: "✨ Stunning Elegance", folder: "stunning", cover: genJpg5("ihome/stunning")[0] },
        { id: "bb10", title: "🔥 Sultry & Sensational Vibes", folder: "sultry", cover: genJpg5("ihome/sultry")[0] }
    ],
        

    ipast: [
        { id: "itr1", title: "✈️ 2022", folder: "f2022", cover: genJpg55("ipast/main/f2022")[0] }, 
        { id: "itr2", title: "🚂 2023", folder: "f2023", cover: genJpg55("ipast/main/f2023")[0] },
        { id: "itr3", title: "🚘 2024", folder: "f2024", cover: genJpg55("ipast/main/f2024")[0] },
        { id: "itr4", title: "🌟 2025", folder: "f2025", cover: genJpg55("ipast/main/f2025")[0] },
    ],


    iout: [
        { id: "sc1", title: "❄️ Snowy Paradise", folder: "sea", cover: genJpgList("iout/snow/sn", 5)[0] },
        { id: "sc2", title: "👙 Beachside Glam", folder: "lone", cover: genJpgList("iout/swim/sw", 5)[0] },
        { id: "sc3", title: "🏕️ Outdoor Escapades", folder: "field", cover: genJpgList("iout/field/fi", 5)[0] },
        { id: "sc4", title: "💨 Breezy Heights", folder: "air", cover: genJpg5("iout/air")[0] },
        { id: "sc41", title: "🚆 Railway Adventures", folder: "rail", cover: genJpg5("iout/rail")[0] },
        { id: "sc42", title: "🌟 Captivating Views", folder: "stunning", cover: genJpg5("iout/stunning")[0] },
        { id: "sc43", title: "🏝️ Exotic Getaways", folder: "vacation", cover: genJpg5("iout/vacation")[0] },
        { id: "sc44", title: "🧘‍♀️ Zen & Serenity", folder: "yoga", cover: genJpg5("iout/yoga")[0] },
    ],

    ipro: [
        { id: "pr1", title: "💫 Stunning Attire", folder: "stunning", cover: genJpgList("ipro/stunning/st", 5)[0] },
        { id: "pr2", title: "🤵 Elegant Suit", folder: "suite", cover: genJpgList("ipro/suite/su", 5)[0] },
        { id: "pr3", title: "👔 Dapper Shirt", folder: "shirt", cover: genJpgList("ipro/shirt/sh", 5)[0] },
        { id: "pr4", title: "🎩 Professional Luxe", folder: "professional", cover: genJpgList("ipro/professional/pr", 5)[0] },
        { id: "pr5", title: "🏢 Chic Office Look", folder: "office", cover: genJpgList("ipro/office/of", 5)[0] },
        { id: "pr6", title: "📚 Sophisticated Scholar", folder: "classroom", cover: genJpgList("ipro/classroom/cl", 5)[0] },
    ],

    ispa: [
        { id: "isp1", title: "💖 Stunning Glow", folder: "stunning", cover: genJpgList("ispa/stunning/st", 5)[0] },
        { id: "isp2", title: "🔥 Sultry Beauty", folder: "sultry", cover: genJpgList("ispa/sultry/su", 5)[0] },
        { id: "isp3", title: "🚦 Vibrant Hues", folder: "trafficlight", cover: genJpgList("ispa/trafficlight/tr", 5)[0] },
        { id: "isp4", title: "💜 Violet Elegance", folder: "violet", cover: genJpgList("ispa/violet/vi", 5)[0] },
        { id: "isp5", title: "🎀 Pretty in Pink", folder: "pink", cover: genJpgList("ispa/pink/pi", 5)[0] },
        { id: "isp6", title: "🕊️ Lace Allure", folder: "lace", cover: genJpgList("ispa/lace/la", 5)[0] },
        { id: "isp7", title: "🤍 Nude Perfection", folder: "nude", cover: genJpgList("ispa/nude/na", 5)[0] },
        { id: "isp9", title: "🌼 Floral Charm", folder: "floral", cover: genJpgList("ispa/floral/fl", 5)[0] },
        { id: "isp10", title: "👑 Timeless Elegance", folder: "elegance", cover: genJpgList("ispa/elegance/el", 5)[0] },
        { id: "isp11", title: "🎽 Chic Camisole", folder: "camisole", cover: genJpgList("ispa/camisole/ca", 5)[0] },
        { id: "isp12", title: "👗 Sensational Bodycon", folder: "bodycon", cover: genJpgList("ispa/bodycon/bo", 5)[0] },
        { id: "isp13", title: "💙 Bold in Blue", folder: "blue", cover: genJpgList("ispa/blue/bl", 5)[0] },
        { id: "isp14", title: "🖤 Classic Black", folder: "black", cover: genJpgList("ispa/black/bl", 5)[0] },
        { id: "isp15", title: "🌟 Backless Dazzle", folder: "backless", cover: genJpgList("ispa/backless/ba", 5)[0] },
    ],

    ired: [
        { id: "ire1", title: "🔥 Voluptuous Charm", folder: "bakunyuu", cover: genJpg5("ired/bakunyuu")[0] },
        { id: "ire2", title: "✨ Dazzling Deco", folder: "deco", cover: genJpg5("ired/deco")[0] },
        { id: "ire3", title: "👑 Regal Elegance", folder: "elegance", cover: genJpg5("ired/elegance")[0] },
        { id: "ire4", title: "🖤 Seductive Sheer Tights", folder: "sheertights", cover: genJpg5("ired/sheertights")[0] },
        { id: "ire5", title: "🍝 Spaghetti Strap Glam", folder: "spaghetti", cover: genJpg5("ired/spaghetti")[0] },
        { id: "ire6", title: "🎀 Strapless Temptation", folder: "strapless", cover: genJpg5("ired/strapless")[0] },
        { id: "ire7", title: "💋 Sultry Siren", folder: "sultry", cover: genJpg5("ired/sultry")[0] },
        { id: "ire8", title: "👚 Chic Halter Top", folder: "haltertop", cover: genJpg5("ired/haltertop")[0] },
    ],

    istr: [
        { id: "ist1", title: "🔥 Voluptuous Beauty", folder: "bakunyuu", cover: genJpg5("istr/bakunyuu")[0] },
        { id: "ist2", title: "👑 Sophisticated Elegance", folder: "elegance", cover: genJpg5("istr/elegance")[0] },
        { id: "ist3", title: "🌸 Enchanting Florals", folder: "floral", cover: genJpg5("istr/floral")[0] },
        { id: "ist4", title: "🤍 Bare & Bold", folder: "nude", cover: genJpg5("istr/nude")[0] },
        { id: "ist5", title: "🌙 Midnight Allure", folder: "night", cover: genJpg5("istr/night")[0] },
        { id: "ist6", title: "✨ Sparkling Seduction", folder: "sparkling", cover: genJpg5("istr/sparkling")[0] },
        { id: "ist7", title: "🎀 Minimalist Chic", folder: "mini", cover: genJpg5("istr/mini")[0] },
        { id: "ist8", title: "💋 Sultry Desire", folder: "sultry", cover: genJpg5("istr/sultry")[0] },
        { id: "ist9", title: "☕ Elegant Tea Time", folder: "teatime", cover: genJpg5("istr/teatime")[0] },
        { id: "ist10", title: "🌟 Stunning Grace", folder: "stunning", cover: genJpg5("istr/stunning")[0] },
    ],

    ideco: [
        { id: "ide1", title: "🔥 Curvaceous Allure", folder: "bakunyuu", cover: genJpg5("ideco/bakunyuu")[0] },
        { id: "ide2", title: "📆 Everyday Elegance", folder: "dailylife", cover: genJpg5("ideco/dailylife")[0] },
        { id: "ide3", title: "🏡 Cozy Chic & Homely Glam", folder: "elegance", cover: genJpg5("ideco/elegance")[0] },
        { id: "ide4", title: "🌷 Flirty Floral Magic", folder: "floral", cover: genJpg5("ideco/floral")[0] },
        { id: "ide5", title: "👗 Timeless Lace Grace", folder: "lace", cover: genJpg5("ideco/lace")[0] },
        { id: "ide6", title: "🌙 Dreamy Night Charm", folder: "night", cover: genJpg5("ideco/night")[0] },
        { id: "ide7", title: "✨ Sparkling Glamour", folder: "sparkling", cover: genJpg5("ideco/sparkling")[0] },
        { id: "ide8", title: "🎀 Sleek Minimalist Beauty", folder: "mini", cover: genJpg5("ideco/mini")[0] },
        { id: "ide9", title: "💋 Sultry Appeal", folder: "sultry", cover: genJpg5("ideco/sultry")[0] },
        { id: "ide10", title: "🌟 Stunning Star", folder: "stunning", cover: genJpg5("ideco/stunning", 5)[0] },
    ],

};

