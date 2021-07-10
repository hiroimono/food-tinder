import { Product } from './product.model';
import { getMaxListeners } from 'process';

export class SimpleDataSource {
    private products: Product[];

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Samsung S5", "iyi telefon", 1000, "1.jpg", "test1@gmail.com"),
            new Product(2, "Samsung S6", "iyi telefon", 2000, "2.jpg", "test2@gmail.com"),
            new Product(3, "Samsung S7", "iyi telefon", 3000, "3.jpg", "test3@gmail.com"),
            new Product(4, "Samsung S8", "iyi telefon", 4000, "4.jpg", "test4@gmail.com"),
            new Product(5, "Samsung S9", "iyi telefon", 5000, "5.jpg", "test5@gmail.com")
        );
    }

    getProducts(): Product[] {
        return this.products;
    }

    addProduct(newProduct: Product): void {
        this.addIdToNewProduct(newProduct);
        this.products.push(newProduct);

        console.log(`${newProduct.name} was added to Database.`);
        console.log('Product Database: ', this.products);
    }

    addIdToNewProduct(newProduct: Product): void {
        newProduct.id = this.produceNewId();
    }

    produceNewId(products: Product[] = this.products) {
        return products.map(product => product.id).reduce((maxId, currentId) => Math.max(maxId, currentId), -Infinity) + 1;
    }
}