class ApiService {
    private baseUrl = 'https://fakestoreapi.com';

    async getAllProducts(): Promise {
        try {
            const response = await fetch(`${this.baseUrl}/products`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to fetch products: ${error.message}`);
            }
            throw new Error('An unknown error occurred while fetching products');
        }
    }

    async getProductsByCategory(category: string): Promise {
        try {
            const response = await fetch(`${this.baseUrl}/products/category/${category}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to fetch category products: ${error.message}`);
            }
            throw new Error('An unknown error occurred while fetching category products');
        }
    }
}

export default new ApiService();