
const API = 'http://localhost:3000';

async function request(url, options = {}) {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        ...options
    };
    try {
        const res = await fetch(url, config);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        if (res.status === 204) return null;
        return await res.json();
    } catch (err) {
        console.error('API Error:', err);
        throw err;
    }
}

window.api = {
   
    getCart(userId) { return request(`${API}/cart?userId=${userId}`); },
    addToCart(data) { return request(`${API}/cart`, { method: 'POST', body: JSON.stringify(data) }); },
    updateCartItem(id, updates) { return request(`${API}/cart/${id}`, { method: 'PATCH', body: JSON.stringify(updates) }); },
    deleteCartItem(id) { return request(`${API}/cart/${id}`, { method: 'DELETE' }); },
    
    
    getFavorites(userId) { return request(`${API}/favorites?userId=${userId}`); },
    addFavorite(data) { return request(`${API}/favorites`, { method: 'POST', body: JSON.stringify(data) }); },
    removeFavorite(id) { return request(`${API}/favorites/${id}`, { method: 'DELETE' }); },
    
   
    products: {
        getAll: () => request(`${API}/products`),
        getById: (id) => request(`${API}/products/${id}`),
        
        filterBy: (query) => request(`${API}/products?${query}`), 
        add: (data) => request(`${API}/products`, { method: 'POST', body: JSON.stringify(data) }),
        update: (id, data) => request(`${API}/products/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
        delete: (id) => request(`${API}/products/${id}`, { method: 'DELETE' })
    }
};