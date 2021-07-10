import { SimpleDataSource } from './data-source.model';
import { Product } from './product.model';

export class ProductRepository {
    private database: SimpleDataSource;
    private products: Product[];

    constructor() {
        this.database = new SimpleDataSource();
        this.products = new Array<Product>();
        this.database.getProducts().forEach(p => this.products.push(p));
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProductsById(id: number): Product {
        return this.products.find(p => p.id === id);
    }

    addNewProduct(newProduct: Product): void {
        this.database.addProduct(newProduct);
    }
}