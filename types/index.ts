export interface CatInterface {
    id: string;
    title: string;
    shorttitle?: string;
    route?: string;
    cover?: string;
    count?: string;
    path?: string;
    subcategories?: SubcategoryInterface[]; // Add this
}

interface SubcategoryInterface {
    id: string;
    title: string;
    images?: string[];
}

export type SubCategoryConfig = Record<string, CatInterface[]>;
