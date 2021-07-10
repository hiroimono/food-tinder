import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number },
        comment: { type: String },
        isLiked: { type: Boolean },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
)

const imageSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        imageWidth: {
            type: Number,
            required: true
        },
        imageHeight: {
            type: Number,
            required: true
        },
        imageType: {
            type: Number,
            required: true
        },
        targetDevices: [{ type: Number }]
    }
)

const attributeSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        category: {
            type: String
        },
        type: {
            type: Number
        },
        order: {
            type: Number
        },
        requirement: {
            type: Number
        },
        value: {
            type: String
        },
        value_i18n: {
            type: String
        }
    }
)

const categorySchema = mongoose.Schema(
    {
        id: {
            type: String
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        priority: {
            type: Number
        },
        color: {
            type: String
        },
        type: {
            type: Number
        },
        name_i18n: {
            type: String
        },
        createdAt: {
            type: String
        },
        updatedAt: {
            type: String
        },
    }
)

const productSchema = mongoose.Schema(
    {
        reviews: [reviewSchema],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        name: {
            type: String,
            required: true,
        },
        manufacturer: {
            type: String,
        },
        shortDescription: {
            type: String,
        },
        priority: {
            type: Number,
        },
        mustVendFirst: {
            type: Boolean,
        },
        produceTime: {
            type: Number,
        },
        attributes: [attributeSchema],
        attributesMap: {
            "Asia": attributeSchema,
            "Beef": attributeSchema,
            "Chicken": attributeSchema,
            "Continental": attributeSchema,
            "HeroView": attributeSchema,
            "Mediterranean": attributeSchema,
            "Oriental": attributeSchema,
            "Pork": attributeSchema,
            "Seafood": attributeSchema,
            "Traditional": attributeSchema,
            "allergens": attributeSchema,
            "badge": attributeSchema,
            "bitter": attributeSchema,
            "contentAmount": attributeSchema,
            "contentMeasure": attributeSchema,
            "deposit": attributeSchema,
            "description": attributeSchema,
            "extName": attributeSchema,
            "extSKU": attributeSchema,
            "freshProduct": attributeSchema,
            "halal": attributeSchema,
            "hindu": attributeSchema,
            "ingredients": attributeSchema,
            "isGlutenfree": attributeSchema,
            "isLactoseFree": attributeSchema,
            "isOrganic": attributeSchema,
            "isSugarfree": attributeSchema,
            "isVegan": attributeSchema,
            "isVegetarian": attributeSchema,
            "isWithoutNuts": attributeSchema,
            "kosher": attributeSchema,
            "mainIngredient": attributeSchema,
            "maxAmount": attributeSchema,
            "mhd": attributeSchema,
            "nutritionCalories": attributeSchema,
            "nutritionCarbs": attributeSchema,
            "nutritionEnergy": attributeSchema,
            "nutritionFat": attributeSchema,
            "nutritionFibers": attributeSchema,
            "nutritionProtein": attributeSchema,
            "nutritionSaturatedFat": attributeSchema,
            "nutritionSodium": attributeSchema,
            "nutritionSugar": attributeSchema,
            "packagingUnit": attributeSchema,
            "plasticWeight": attributeSchema,
            "purchasingPrice": attributeSchema,
            "salty": attributeSchema,
            "secondaryIngredient": attributeSchema,
            "sku": attributeSchema,
            "sour": attributeSchema,
            "supplier": attributeSchema,
            "sweet": attributeSchema,
            "temperatureHigh": attributeSchema,
            "temperatureLow": attributeSchema,
            "umami": attributeSchema,
            "weight": attributeSchema
        },
        heatingSettings: {
            isHeatable: {
                type: Boolean,
            },
            instructionType: {
                type: String,
            },
            heatingTime: {
                type: Number,
            },
        },
        isDigital: {
            type: Boolean,
        },
        category: categorySchema,
        subCategory: categorySchema,
        childProducts: {
            type: String
        },
        imageSet: [imageSchema],
        taxRate: {
            id: {
                type: String,
            },
            name: {
                type: String,
            },
            rate: {
                type: Number,
            },
        },
        taxRateId: {
            type: String,
        },
        templateId: {
            type: String,
        },
        motorSpeed: {
            SL2: {
                type: Number
            },
            SL3: {
                type: Number
            }
        },
        channelRunningTime: {
            SL2: {
                type: Number
            },
            SL3: {
                type: Number
            }
        },
        bounding: {
            width: {
                type: Number
            },
            height: {
                type: Number
            },
            depth: {
                type: Number
            }
        },
        padding: {
            width: {
                type: Number
            },
            height: {
                type: Number
            },
            depth: {
                type: Number
            }
        },
        price: {
            type: Number
        },
        pricingRule: {
            type: Number
        },
        quantity: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product