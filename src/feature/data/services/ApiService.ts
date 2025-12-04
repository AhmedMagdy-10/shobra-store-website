export class ApiService {
    async getAllProducts(): Promise<any[]> {
        const res = await fetch('https://fakestoreapi.com/products');
        return res.json();
    }

    async getProductsByCategory(category: string): Promise<any[]> {
        const res = await fetch(
            `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
        );
        return res.json();
    }
}

export default new ApiService();