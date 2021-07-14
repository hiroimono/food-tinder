/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
    id: string;
}

interface Attribute {
    "name": string,
    "category": string,
    "type": number,
    "order": number,
    "requirement": number,
    "value": string,
    "value_i18n": number
}

interface AttributesMap {
    "Asia": Attribute,
    "Beef": Attribute,
    "Chicken": Attribute,
    "Continental": Attribute,
    "HeroView": Attribute,
    "Mediterranean": Attribute,
    "Oriental": Attribute,
    "Pork": Attribute,
    "Seafood": Attribute,
    "Traditional": Attribute,
    "allergens": Attribute,
    "badge": Attribute,
    "bitter": Attribute,
    "contentAmount": Attribute,
    "contentMeasure": Attribute,
    "deposit": Attribute,
    "description": Attribute,
    "extName": Attribute,
    "extSKU": Attribute,
    "freshProduct": Attribute,
    "halal": Attribute,
    "hindu": Attribute,
    "ingredients": Attribute,
    "isGlutenfree": Attribute,
    "isLactoseFree": Attribute,
    "isOrganic": Attribute,
    "isSugarfree": Attribute,
    "isVegan": Attribute,
    "isVegetarian": Attribute,
    "isWithoutNuts": Attribute,
    "kosher": Attribute,
    "mainIngredient": Attribute,
    "maxAmount": Attribute,
    "mhd": Attribute,
    "nutritionCalories": Attribute,
    "nutritionCarbs": Attribute,
    "nutritionEnergy": Attribute,
    "nutritionFat": Attribute,
    "nutritionFibers": Attribute,
    "nutritionProtein": Attribute,
    "nutritionSaturatedFat": Attribute,
    "nutritionSodium": Attribute,
    "nutritionSugar": Attribute,
    "packagingUnit": Attribute,
    "plasticWeight": Attribute,
    "purchasingPrice": Attribute,
    "salty": Attribute,
    "secondaryIngredient": Attribute,
    "sku": Attribute,
    "sour": Attribute,
    "supplier": Attribute,
    "sweet": Attribute,
    "temperatureHigh": Attribute,
    "temperatureLow": Attribute,
    "umami": Attribute,
    "weight": Attribute
}

interface HeatingSettings {
    "isHeatable": boolean,
    "instructionType": string,
    "heatingTime": number
}

interface Category {
    "id": string,
    "name": string,
    "description": string,
    "priority": number,
    "color": string,
    "createdAt": string,
    "updatedAt": string,
    "type": number,
    "name_i18n": number
}

interface Image {
    "id": string,
    "title": string,
    "fileName": string,
    "url": string,
    "imageWidth": number,
    "imageHeight": number,
    "imageType": number,
    "targetDevices": number[]
}

interface TaxRate {
    "id": string,
    "name": string,
    "rate": number
}

interface Speed {
    "SL2": number,
    "SL3": number
}

interface Dimentions {
    "width": number,
    "height": number,
    "depth": number
}

interface Product {
    "_id": {
        "$oid": string
    },
    "name"?: string,
    "manufacturer"?: string,
    "shortDescription"?: string,
    "description"?: string,
    "priority"?: number,
    "mustVendFirst"?: boolean,
    "produceTime"?: number,
    "attributes"?: Attribute[],
    "attributesMap"?: AttributesMap,
    "heatingSettings"?: HeatingSettings,
    "isDigital"?: boolean,
    "category"?: Category,
    "subCategory"?: Category,
    "childProducts"?: number,
    "imageSet"?: Image[],
    "taxRate"?: TaxRate,
    "taxRateId"?: string,
    "templateId"?: string,
    "motorSpeed"?: Speed,
    "channelRunningTime"?: Speed,
    "bounding"?: Dimentions,
    "padding"?: Dimentions,
    "price"?: number,
    "pricingRule"?: number,
    "quantity"?: number,
    "updatedAt"?: {
        "$date"?: string
    }
}

interface Data {
    apiVersion?: string,
    data?: {
        name: string
    },
    status?: string
}
