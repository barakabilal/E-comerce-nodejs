import React, { useState, useMemo } from 'react';

// TypeScript interfaces
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface Category {
  value: string;
  label: string;
  icon: string;
}

interface StarRatingProps {
  rating: number;
}

// Sample product data matching your tech store theme
const shopProducts: Product[] = [
  {
    id: 1,
    title: "MacBook Pro M3",
    description: "Latest MacBook Pro with M3 chip, 16GB RAM, 512GB SSD",
    price: 2299,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    category: "laptops",
    rating: 4.9,
    reviews: 125,
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    description: "iPhone 15 Pro with titanium design and A17 Pro chip",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    category: "phones",
    rating: 4.8,
    reviews: 289,
    inStock: true,
    isNew: true
  },
  {
    id: 3,
    title: "AirPods Pro 2",
    description: "Active Noise Cancellation, Spatial Audio, USB-C",
    price: 249,
    originalPrice: 279,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
    category: "accessories",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isBestseller: true
  },
  {
    id: 4,
    title: "Dell XPS 13",
    description: "Ultra-portable laptop with 13th Gen Intel Core i7",
    price: 1299,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    category: "laptops",
    rating: 4.6,
    reviews: 98,
    inStock: true
  },
  {
    id: 5,
    title: "Samsung Galaxy S24",
    description: "Latest Samsung flagship with AI features and 50MP camera",
    price: 899,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    category: "phones",
    rating: 4.5,
    reviews: 203,
    inStock: false
  },
  {
    id: 6,
    title: "Sony WH-1000XM5",
    description: "Industry-leading noise canceling wireless headphones",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop",
    category: "accessories",
    rating: 4.8,
    reviews: 167,
    inStock: true,
    isBestseller: true
  },
  {
    id: 7,
    title: "iPad Pro 12.9",
    description: "iPad Pro with M2 chip and Liquid Retina XDR display",
    price: 1099,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    category: "tablets",
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  {
    id: 8,
    title: "Gaming Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with cherry MX switches",
    price: 129,
    originalPrice: 159,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    category: "accessories",
    rating: 4.4,
    reviews: 234,
    inStock: true
  },
  {
    id: 9,
    title: "Surface Pro 9",
    description: "Microsoft Surface Pro 9 with Intel Core i7 processor",
    price: 1299,
    originalPrice: 1399,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop",
    category: "tablets",
    rating: 4.5,
    reviews: 67,
    inStock: true
  },
  {
    id: 10,
    title: "Google Pixel 8",
    description: "Google Pixel 8 with advanced AI photography features",
    price: 699,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    category: "phones",
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 11,
    title: "Razer Gaming Mouse",
    description: "High-precision gaming mouse with customizable RGB",
    price: 79,
    originalPrice: 99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    category: "accessories",
    rating: 4.3,
    reviews: 189,
    inStock: true
  },
  {
    id: 12,
    title: "HP Spectre x360",
    description: "Convertible laptop with OLED touchscreen",
    price: 1599,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=400&h=300&fit=crop",
    category: "laptops",
    rating: 4.4,
    reviews: 76,
    inStock: true
  }
];

const categories: Category[] = [
  { value: 'all', label: 'All Products', icon: '🛍️' },
  { value: 'laptops', label: 'Laptops', icon: '💻' },
  { value: 'phones', label: 'Phones', icon: '📱' },
  { value: 'tablets', label: 'Tablets', icon: '📱' },
  { value: 'accessories', label: 'Accessories', icon: '🎧' }
];

const Shop: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredAndSortedProducts = useMemo<Product[]>(() => {
    const filtered = shopProducts.filter((product: Product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = priceRange === 'all' || 
                          (priceRange === 'under500' && product.price < 500) ||
                          (priceRange === '500-1000' && product.price >= 500 && product.price < 1000) ||
                          (priceRange === 'over1000' && product.price >= 1000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a: Product, b: Product) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  const handleAddToCart = (product: Product): void => {
    alert(`Added ${product.title} to cart!`);
  };

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortBy(event.target.value);
  };

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setPriceRange(event.target.value);
  };

  const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i} className="text-gray-300">☆</span>);
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .gradient-text {
          color: orange;
          background: orange;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }
        
        .product-card {
          transition: all 0.3s ease;
          box-shadow: 4px 9px 20px rgba(0, 0, 0, 0.5);
          background: white;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 6px 12px 25px rgba(0, 0, 0, 0.6);
        }
        
        .product-image {
          transition: all 0.3s ease;
          height: 200px;
          width: 100%;
          object-fit: cover;
          cursor: pointer;
        }
        
        .product-card:hover .product-image {
          height: 180px;
        }
        
        .category-btn {
          transition: all 0.3s ease;
          padding: 10px 20px;
          border-radius: 25px;
          border: 2px solid #1e293b;
          font-weight: bold;
          margin: 4px;
          cursor: pointer;
          background: white;
          color: #1e293b;
        }
        
        .category-btn.active {
          background-color: #1e293b;
          color: white;
        }
        
        .category-btn:hover {
          transform: translateY(-2px);
          background-color: #334155;
          color: white;
        }
        
        .shop-btn {
          background: white;
          color: #1e293b;
          font-family: 'Merriweather', serif;
          font-weight: bold;
          height: 45px;
          box-shadow: 3px 7px 20px rgba(200, 200, 200, 0.4);
          border-radius: 6px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .shop-btn:hover:not(:disabled) {
          background: #1e293b;
          color: white;
        }
        
        .shop-btn:disabled {
          background: #f1f5f9;
          color: #94a3b8;
          cursor: not-allowed;
        }
        
        .filter-input {
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          width: 100%;
          font-size: 14px;
          transition: border-color 0.3s ease;
        }
        
        .filter-input:focus {
          outline: none;
          border-color: orange;
        }
        
        .badge {
          position: absolute;
          top: 8px;
          left: 8px;
          z-index: 10;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: bold;
          color: white;
          margin-bottom: 4px;
        }
        
        .badge-new { background-color: orange; }
        .badge-bestseller { background-color: #1e293b; }
        .badge-out-of-stock { background-color: #1e293b; }
        .badge-sale { background-color: orange; }
        
        .blur-fade {
          animation: blurFadeIn 0.8s ease-out forwards;
        }
        
        @keyframes blurFadeIn {
          from {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Header Section */}
      <div className="bg-slate-800 h-64">
        <div className="container mx-auto px-4 py-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-center gradient-text mb-4" 
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                color: 'orange',
                background: 'orange',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}>
            Our Shop
          </h1>
          <p className="text-xl text-center text-white mb-8" 
             style={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}>
            Discover the latest in technology
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 blur-fade">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500">🔍</span>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="filter-input pl-10"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            
            <select 
              className="filter-input" 
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Sort by Rating</option>
            </select>
            
            <select 
              className="filter-input"
              value={priceRange}
              onChange={handlePriceRangeChange}
            >
              <option value="all">All Prices</option>
              <option value="under500">Under $500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="over1000">Over $1000</option>
            </select>
            
            <button className="filter-input bg-white border-2 border-orange-500 text-orange-500 hover:bg-slate-800 hover:text-white transition-all">
              🔧 Advanced Filters
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center items-center">
            {categories.map((category: Category) => (
              <button
                key={category.value}
                className={`category-btn ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.value)}
              >
                {category.icon} {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-xl font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Showing {filteredAndSortedProducts.length} products
          </h2>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-slate-800 text-white rounded-full text-sm font-bold">
              {selectedCategory === 'all' ? 'All Categories' : categories.find((c: Category) => c.value === selectedCategory)?.label}
            </span>
            {searchTerm && (
              <span 
                className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm cursor-pointer font-bold"
                onClick={() => setSearchTerm('')}
              >
                Search: "{searchTerm}" ✕
              </span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 blur-fade">
          {filteredAndSortedProducts.map((product: Product) => (
            <div key={product.id} className="product-card">
              {/* Badges */}
              <div className="absolute top-2 left-2 z-10 flex flex-col">
                {product.isNew && <div className="badge badge-new mb-1">NEW</div>}
                {product.isBestseller && <div className="badge badge-bestseller mb-1">BESTSELLER</div>}
                {!product.inStock && <div className="badge badge-out-of-stock mb-1">OUT OF STOCK</div>}
                {product.originalPrice > product.price && (
                  <div className="badge badge-sale">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</div>
                )}
              </div>

              <img
                src={product.image}
                alt={product.title}
                className={`product-image ${!product.inStock ? 'opacity-60' : ''}`}
                onClick={() => alert(`Viewing ${product.title}`)}
              />
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {product.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 h-10 overflow-hidden">
                  {product.description}
                </p>

                <div className="flex items-center mb-2">
                  <StarRating rating={product.rating} />
                  <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xl font-bold text-black">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  className="shop-btn"
                  disabled={!product.inStock}
                  onClick={() => handleAddToCart(product)}
                >
                  🛒 {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-black mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              No products found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}

        <div className="h-12"></div>
        <hr className="border-slate-800" />
        
        {/* Call to Action */}
        <div className="text-center py-8 blur-fade">
          <h3 className="text-3xl font-bold p-4 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Need help finding the perfect product?
          </h3>
          <button 
            className="shop-btn w-64 h-12 mt-5" 
            onClick={() => alert('Contact feature coming soon!')}
          >
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;