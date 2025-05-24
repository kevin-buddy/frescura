'use client'
// import { Button } from '@/components/ui/button'
// import Typography from '@/components/ui/typography'
import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Feature from '../feature'
// import Article from '../article'
// import Link from 'next/link'

export default function Page() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState("popularity");
    const [searchQuery, setSearchQuery] = useState("");
    const [showDietaryFilter, setShowDietaryFilter] = useState(false);
    const [showSortOptions, setShowSortOptions] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
  
    // Define product interface
    interface Product {
      id: number;
      title: string;
      category: string;
      dietary: string[];
      description: string;
      fullDescription: string;
      price: number;
      image: string;
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
      ingredients: string[];
      rating: number;
      reviews: number;
      popularity: number;
    }
  
    // Sample products data
    const products: Product[] = [
      {
        id: 1,
        title: "Mediterranean Bowl",
        category: "Balanced",
        dietary: ["Gluten-free"],
        description:
          "Grilled chicken with quinoa, roasted vegetables and tzatziki sauce",
        fullDescription:
          "Our Mediterranean Bowl combines lean grilled chicken breast with protein-rich quinoa and a colorful array of roasted vegetables including bell peppers, zucchini, and eggplant. Topped with our house-made tzatziki sauce for a refreshing finish. This balanced meal provides sustained energy and essential nutrients.",
        price: 12.99,
        image:
          "https://readdy.ai/api/search-image?query=mediterranean%2520bowl%2520with%2520grilled%2520chicken%252C%2520quinoa%252C%2520roasted%2520vegetables%2520and%2520tzatziki%2520sauce%2520on%2520wooden%2520table%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520food%2520photography%2520with%2520clean%2520minimalist%2520background&width=600&height=400&seq=11&orientation=landscape",
        calories: 450,
        protein: 32,
        carbs: 45,
        fat: 15,
        ingredients: [
          "Grilled chicken breast",
          "Organic quinoa",
          "Bell peppers",
          "Zucchini",
          "Eggplant",
          "Greek yogurt",
          "Cucumber",
          "Garlic",
          "Dill",
          "Extra virgin olive oil",
          "Lemon juice",
          "Sea salt",
          "Black pepper",
        ],
        rating: 4.8,
        reviews: 124,
        popularity: 95,
      },
      {
        id: 2,
        title: "Protein Power Plate",
        category: "Fitness",
        dietary: ["Dairy-free"],
        description: "Grilled salmon with sweet potato and steamed broccoli",
        fullDescription:
          "Our Protein Power Plate is designed to fuel your fitness goals with wild-caught grilled salmon, providing essential omega-3 fatty acids. Paired with fiber-rich sweet potatoes and nutrient-dense steamed broccoli, this meal offers an optimal balance of protein and complex carbohydrates to support muscle recovery and growth.",
        price: 14.99,
        image:
          "https://readdy.ai/api/search-image?query=grilled%2520salmon%2520fillet%2520with%2520roasted%2520sweet%2520potato%2520and%2520steamed%2520broccoli%2520on%2520white%2520plate%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520food%2520photography%2520with%2520clean%2520minimalist%2520background&width=600&height=400&seq=12&orientation=landscape",
        calories: 520,
        protein: 40,
        carbs: 38,
        fat: 18,
        ingredients: [
          "Wild-caught salmon",
          "Sweet potato",
          "Broccoli",
          "Extra virgin olive oil",
          "Lemon",
          "Garlic",
          "Thyme",
          "Sea salt",
          "Black pepper",
        ],
        rating: 4.9,
        reviews: 98,
        popularity: 90,
      },
      {
        id: 3,
        title: "Hearty Veggie Bowl",
        category: "Plant-Based",
        dietary: ["Vegan", "Gluten-free", "Dairy-free", "Nut-free"],
        description: "Roasted vegetables with lentils and tahini dressing",
        fullDescription:
          "Our Hearty Veggie Bowl is a plant-based powerhouse featuring protein-rich lentils and a rainbow of roasted seasonal vegetables. Drizzled with our house-made tahini dressing, this bowl delivers complete plant protein, fiber, and essential nutrients in every bite. Perfect for those seeking a satisfying vegan meal option.",
        price: 11.99,
        image:
          "https://readdy.ai/api/search-image?query=colorful%2520roasted%2520vegetable%2520bowl%2520with%2520lentils%2520and%2520tahini%2520dressing%2520on%2520rustic%2520wooden%2520table%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520food%2520photography%2520with%2520clean%2520minimalist%2520background&width=600&height=400&seq=13&orientation=landscape",
        calories: 380,
        protein: 18,
        carbs: 52,
        fat: 12,
        ingredients: [
          "Green lentils",
          "Sweet potato",
          "Cauliflower",
          "Brussels sprouts",
          "Carrots",
          "Red onion",
          "Tahini",
          "Lemon juice",
          "Garlic",
          "Cumin",
          "Paprika",
          "Extra virgin olive oil",
          "Sea salt",
          "Black pepper",
        ],
        rating: 4.7,
        reviews: 86,
        popularity: 85,
      },
      {
        id: 4,
        title: "Keto Steak Plate",
        category: "Fitness",
        dietary: ["Gluten-free", "Dairy-free"],
        description: "Grass-fed steak with cauliflower mash and asparagus",
        fullDescription:
          "Our Keto Steak Plate features premium grass-fed beef paired with creamy cauliflower mash and tender asparagus. This low-carb, high-protein meal is designed to support ketogenic dietary goals while delivering exceptional flavor. The perfect balance of healthy fats and protein to fuel your active lifestyle.",
        price: 16.99,
        image:
          "https://readdy.ai/api/search-image?query=grilled%2520steak%2520with%2520cauliflower%2520mash%2520and%2520asparagus%2520on%2520black%2520plate%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520food%2520photography%2520with%2520clean%2520minimalist%2520background&width=600&height=400&seq=14&orientation=landscape",
        calories: 560,
        protein: 45,
        carbs: 12,
        fat: 35,
        ingredients: [
          "Grass-fed beef steak",
          "Cauliflower",
          "Asparagus",
          "Garlic",
          "Butter",
          "Thyme",
          "Rosemary",
          "Extra virgin olive oil",
          "Sea salt",
          "Black pepper",
        ],
        rating: 4.9,
        reviews: 112,
        popularity: 92,
      },
      {
        id: 5,
        title: "Buddha Bowl",
        category: "Plant-Based",
        dietary: ["Vegan", "Gluten-free", "Dairy-free"],
        description: "Quinoa, roasted chickpeas, avocado and seasonal vegetables",
        fullDescription:
          "Our Buddha Bowl is a nutritional masterpiece featuring protein-rich quinoa and roasted chickpeas, creamy avocado, and a vibrant array of seasonal vegetables. This plant-based meal provides complete protein, healthy fats, and complex carbohydrates to keep you satisfied and energized throughout your day.",
        price: 12.99,
        image:
          "https://readdy.ai/api/search-image?query=buddha%2520bowl%2520with%2520quinoa%252C%2520roasted%2520chickpeas%252C%2520avocado%2520and%2520colorful%2520vegetables%2520on%2520white%2520bowl%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520food%2520photography%2520with%2520clean%2520minimalist%2520background&width=600&height=400&seq=15&orientation=landscape",
        calories: 420,
        protein: 15,
        carbs: 48,
        fat: 20,
        ingredients: [
          "Organic quinoa",
          "Chickpeas",
          "Avocado",
          "Cherry tomatoes",
          "Cucumber",
          "Red cabbage",
          "Carrots",
          "Spinach",
          "Tahini",
          "Lemon juice",
          "Garlic",
          "Cumin",
          "Extra virgin olive oil",
          "Sea salt",
          "Black pepper",
        ],
        rating: 4.8,
        reviews: 95,
        popularity: 88,
      },
      {
        id: 6,
        title: "Classic Chicken Meal",
        category: "Balanced",
        dietary: ["Dairy-free"],
        description:
          "Herb-roasted chicken with brown rice and seasonal vegetables",
        fullDescription:
          "Our Classic Chicken Meal features tender herb-roasted chicken breast paired with fiber-rich brown rice and a medley of seasonal vegetables. This perfectly balanced meal provides lean protein, complex carbohydrates, and essential vitamins and minerals to support overall health and wellbeing.",
        price: 13.99,
        image:
          "https://readdy.ai/api/search-image?query=herb%2520roasted%2520chicken%2520breast%2520with%2520brown%2520rice%2520and%2520seasonal%2520vegetables%2520on%2520white%2520plate%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520food%2520photography%2520with%2520clean%2520minimalist%2520background&width=600&height=400&seq=16&orientation=landscape",
        calories: 480,
        protein: 35,
        carbs: 42,
        fat: 14,
        ingredients: [
          "Free-range chicken breast",
          "Brown rice",
          "Broccoli",
          "Carrots",
          "Bell peppers",
          "Garlic",
          "Thyme",
          "Rosemary",
          "Extra virgin olive oil",
          "Lemon juice",
          "Sea salt",
          "Black pepper",
        ],
        rating: 4.7,
        reviews: 108,
        popularity: 86,
      },
      {
        id: 7,
        title: "Teriyaki Tofu Bowl",
        category: "Plant-Based",
        dietary: ["Vegan", "Dairy-free"],
        description:
          "Marinated tofu with brown rice, steamed vegetables and teriyaki sauce",
        fullDescription:
          "Our Teriyaki Tofu Bowl combines protein-rich marinated tofu with fiber-packed brown rice and perfectly steamed vegetables, all drizzled with our house-made teriyaki sauce. This plant-based meal offers a delicious balance of flavors and textures while providing essential nutrients for a satisfying dining experience.",
        price: 12.49,
        image:
          "https://readdy.ai/api/search-image?query=teriyaki%2520tofu%2520bowl%2520with%2520brown%2520rice%2520and%2520steamed%2520vegetables%2520with%2520teriyaki%2520sauce%2520on%2520black%2520bowl%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520food%2520photography%2520with%2520clean%2520minimalist%2520background&width=600&height=400&seq=17&orientation=landscape",
        calories: 410,
        protein: 20,
        carbs: 55,
        fat: 10,
        ingredients: [
          "Organic firm tofu",
          "Brown rice",
          "Broccoli",
          "Carrots",
          "Snow peas",
          "Red bell pepper",
          "Tamari sauce",
          "Ginger",
          "Garlic",
          "Maple syrup",
          "Rice vinegar",
          "Sesame oil",
          "Green onions",
          "Sesame seeds",
        ],
        rating: 4.6,
        reviews: 78,
        popularity: 82,
      },
      {
        id: 8,
        title: "Protein Breakfast Box",
        category: "Fitness",
        dietary: ["Gluten-free"],
        description:
          "Egg white frittata with turkey bacon, sweet potato hash and berries",
        fullDescription:
          "Start your day strong with our Protein Breakfast Box featuring a fluffy egg white frittata, lean turkey bacon, fiber-rich sweet potato hash, and antioxidant-packed mixed berries. This balanced morning meal provides sustained energy and muscle-supporting protein to power your active lifestyle from sunrise.",
        price: 10.99,
        image:
          "https://readdy.ai/api/search-image?query=egg%2520white%2520frittata%2520with%2520turkey%2520bacon%252C%2520sweet%2520potato%2520hash%2520and%2520fresh%2520berries%2520in%2520compartment%2520container%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520food%2520photography%2520with%2520clean%2520minimalist%2520background&width=600&height=400&seq=18&orientation=landscape",
        calories: 390,
        protein: 28,
        carbs: 32,
        fat: 16,
        ingredients: [
          "Egg whites",
          "Turkey bacon",
          "Sweet potato",
          "Red bell pepper",
          "Onion",
          "Spinach",
          "Strawberries",
          "Blueberries",
          "Raspberries",
          "Extra virgin olive oil",
          "Sea salt",
          "Black pepper",
        ],
        rating: 4.8,
        reviews: 92,
        popularity: 89,
      },
      {
        id: 9,
        title: "Mediterranean Salad",
        category: "Balanced",
        dietary: ["Gluten-free", "Nut-free"],
        description:
          "Mixed greens with feta, olives, tomatoes, cucumber and lemon vinaigrette",
        fullDescription:
          "Our Mediterranean Salad combines crisp mixed greens with tangy feta cheese, briny olives, juicy tomatoes, and refreshing cucumber, all tossed in our house-made lemon vinaigrette. This light yet satisfying meal captures the essence of Mediterranean cuisine while providing essential nutrients and vibrant flavors.",
        price: 11.49,
        image:
          "https://readdy.ai/api/search-image?query=mediterranean%2520salad%2520with%2520mixed%2520greens%252C%2520feta%2520cheese%252C%2520kalamata%2520olives%252C%2520tomatoes%252C%2520cucumber%2520and%2520lemon%2520vinaigrette%2520on%2520white%2520plate%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520food%2520photography%2520with%2520clean%2520minimalist%2520background&width=600&height=400&seq=19&orientation=landscape",
        calories: 320,
        protein: 12,
        carbs: 18,
        fat: 22,
        ingredients: [
          "Mixed greens",
          "Feta cheese",
          "Kalamata olives",
          "Cherry tomatoes",
          "Cucumber",
          "Red onion",
          "Extra virgin olive oil",
          "Lemon juice",
          "Oregano",
          "Garlic",
          "Dijon mustard",
          "Sea salt",
          "Black pepper",
        ],
        rating: 4.7,
        reviews: 84,
        popularity: 83,
      },
    ];
  
    // const toggleMenu = () => {
    //   setIsMenuOpen(!isMenuOpen);
    // };
  
    const handleCategoryChange = (category: string) => {
      setActiveCategory(category);
    };
  
    const toggleDietaryOption = (option: string) => {
      if (selectedDietary.includes(option)) {
        setSelectedDietary(selectedDietary.filter((item) => item !== option));
      } else {
        setSelectedDietary([...selectedDietary, option]);
      }
    };
  
    const handleSortChange = (option: string) => {
      setSortOption(option);
      setShowSortOptions(false);
    };
  
    const openProductModal = (product: Product) => {
      setSelectedProduct(product);
      setShowModal(true);
      setQuantity(1);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const handleQuantityChange = (value: number) => {
      if (value >= 1) {
        setQuantity(value);
      }
    };
  
    // Filter products based on selected criteria
    const filteredProducts = products.filter((product) => {
      // Filter by category
      if (activeCategory !== "All" && product.category !== activeCategory) {
        return false;
      }
  
      // Filter by dietary restrictions
      if (selectedDietary.length > 0) {
        const hasAllRestrictions = selectedDietary.every((restriction) =>
          product.dietary.includes(restriction)
        );
        if (!hasAllRestrictions) {
          return false;
        }
      }
  
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      }
  
      return true;
    });
  
    // Sort filtered products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "popularity":
          return b.popularity - a.popularity;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  
    // Close dropdowns when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
  
        if (!target.closest(".dietary-filter-container") && showDietaryFilter) {
          setShowDietaryFilter(false);
        }
  
        if (!target.closest(".sort-options-container") && showSortOptions) {
          setShowSortOptions(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [showDietaryFilter, showSortOptions]);
  
    // Prevent body scroll when modal is open
    useEffect(() => {
      if (showModal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [showModal]);
  return (
    <div>
      {/* Main Content */}
      <div className="pt-16 pb-12">
        {/* Page Header */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Our Meal Plans</h1>
            <p className="mt-2 text-lg text-gray-600">
              Discover nutritious, chef-crafted meals tailored to your lifestyle
            </p>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              {/* Category Tabs */}
              <div className="flex space-x-1 overflow-x-auto pb-2 md:pb-0">
                {["All", "Balanced", "Plant-Based", "Fitness"].map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() => {handleCategoryChange(category)}}
                      className={`px-4 py-2 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                        activeCategory === category
                          ? "bg-[#315A2E] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search meals..."
                    value={searchQuery}
                    onChange={(e) => {setSearchQuery(e.target.value)}}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#315A2E] focus:border-transparent text-sm"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400 text-sm"></i>
                  </div>
                </div>

                <div className="flex space-x-3">
                  {/* Dietary Restrictions Filter */}
                  <div className="relative dietary-filter-container">
                    <button
                      onClick={() => {setShowDietaryFilter(!showDietaryFilter)}}
                      className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <span>Dietary Restrictions</span>
                      <i
                        className={`fas fa-chevron-${
                          showDietaryFilter ? "up" : "down"
                        } ml-2`}
                      ></i>
                    </button>
                    {showDietaryFilter && (
                      <div className="absolute z-10 mt-1 w-56 bg-white rounded-md shadow-lg">
                        <div className="p-2">
                          {[
                            "Gluten-free",
                            "Dairy-free",
                            "Vegan",
                            "Nut-free",
                          ].map((option) => (
                            <div
                              key={option}
                              className="flex items-center p-2 hover:bg-gray-50 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                id={option}
                                checked={selectedDietary.includes(option)}
                                onChange={() => {toggleDietaryOption(option)}}
                                className="h-4 w-4 text-[#315A2E] focus:ring-[#315A2E] border-gray-300 rounded cursor-pointer"
                              />
                              <label
                                htmlFor={option}
                                className="ml-2 text-sm text-gray-700 cursor-pointer"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sort Options */}
                  <div className="relative sort-options-container">
                    <button
                      onClick={() => {setShowSortOptions(!showSortOptions)}}
                      className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <span>Sort By</span>
                      <i
                        className={`fas fa-chevron-${
                          showSortOptions ? "up" : "down"
                        } ml-2`}
                      ></i>
                    </button>
                    {showSortOptions && (
                      <div className="absolute right-0 z-10 mt-1 w-48 bg-white rounded-md shadow-lg">
                        <div className="py-1">
                          <button
                            onClick={() => {handleSortChange("popularity")}}
                            className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-50 cursor-pointer ${
                              sortOption === "popularity"
                                ? "text-[#315A2E] font-medium"
                                : "text-gray-700"
                            }`}
                          >
                            Most Popular
                          </button>
                          <button
                            onClick={() => {handleSortChange("price-low")}}
                            className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-50 cursor-pointer ${
                              sortOption === "price-low"
                                ? "text-[#315A2E] font-medium"
                                : "text-gray-700"
                            }`}
                          >
                            Price: Low to High
                          </button>
                          <button
                            onClick={() => {handleSortChange("price-high")}}
                            className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-50 cursor-pointer ${
                              sortOption === "price-high"
                                ? "text-[#315A2E] font-medium"
                                : "text-gray-700"
                            }`}
                          >
                            Price: High to Low
                          </button>
                          <button
                            onClick={() => {handleSortChange("rating")}}
                            className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-50 cursor-pointer ${
                              sortOption === "rating"
                                ? "text-[#315A2E] font-medium"
                                : "text-gray-700"
                            }`}
                          >
                            Highest Rated
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {selectedDietary.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600">Active filters:</span>
                {selectedDietary.map((filter) => (
                  <span
                    key={filter}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#e8f1e7] text-[#315A2E]"
                  >
                    {filter}
                    <button
                      onClick={() => {toggleDietaryOption(filter)}}
                      className="ml-1.5 text-[#315A2E] hover:text-[#264723] cursor-pointer"
                    >
                      <i className="fas fa-times-circle"></i>
                    </button>
                  </span>
                ))}
                <button
                  onClick={() => {setSelectedDietary([])}}
                  className="text-sm text-[#315A2E] hover:text-[#264723] font-medium cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  onClick={() => {openProductModal(product)}}
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-900">
                        {product.title}
                      </h3>
                      <span className="text-lg font-bold text-[#315A2E]">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas ${
                              i < Math.floor(product.rating)
                                ? "fa-star"
                                : i < product.rating
                                ? "fa-star-half-alt"
                                : "fa-star text-gray-300"
                            } text-sm`}
                          ></i>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>

                    <p className="mt-3 text-gray-600 text-sm">
                      {product.description}
                    </p>

                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-3">
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-gray-500">
                            Calories
                          </span>
                          <span className="font-medium">
                            {product.calories}
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-gray-500">Protein</span>
                          <span className="font-medium">
                            {product.protein}g
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-gray-500">Carbs</span>
                          <span className="font-medium">{product.carbs}g</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        {product.dietary.slice(0, 2).map((diet) => (
                          <span
                            key={diet}
                            className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-[#e8f1e7] text-[#315A2E]"
                          >
                            {diet}
                          </span>
                        ))}
                        {product.dietary.length > 2 && (
                          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-[#e8f1e7] text-[#315A2E]">
                            +{product.dietary.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      className="mt-4 w-full bg-[#315A2E] text-white py-2 rounded-md hover:bg-[#264723] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart functionality would go here
                        alert(`${product.title} added to cart!`);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-medium text-gray-700">
                No meals found
              </h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none cursor-pointer"
                  onClick={closeModal}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <div className="h-72 md:h-full w-full overflow-hidden">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[80vh]">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProduct.title}
                  </h2>

                  <div className="mt-2 flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas ${
                            i < Math.floor(selectedProduct.rating)
                              ? "fa-star"
                              : i < selectedProduct.rating
                              ? "fa-star-half-alt"
                              : "fa-star text-gray-300"
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      ({selectedProduct.reviews} reviews)
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-2xl font-bold text-[#315A2E]">
                      ${selectedProduct.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Description
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {selectedProduct.fullDescription}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Nutritional Information
                    </h3>
                    <div className="mt-2 grid grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <span className="block text-sm text-gray-500">
                          Calories
                        </span>
                        <span className="block font-medium text-gray-900">
                          {selectedProduct.calories}
                        </span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <span className="block text-sm text-gray-500">
                          Protein
                        </span>
                        <span className="block font-medium text-gray-900">
                          {selectedProduct.protein}g
                        </span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <span className="block text-sm text-gray-500">
                          Carbs
                        </span>
                        <span className="block font-medium text-gray-900">
                          {selectedProduct.carbs}g
                        </span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <span className="block text-sm text-gray-500">Fat</span>
                        <span className="block font-medium text-gray-900">
                          {selectedProduct.fat}g
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Ingredients
                    </h3>
                    <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
                      {selectedProduct.ingredients.map((ingredient, index) => (
                        <li
                          key={index}
                          className="text-gray-600 text-sm flex items-center"
                        >
                          <i className="fas fa-check text-[#315A2E] mr-2 text-xs"></i>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Dietary Information
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProduct.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#e8f1e7] text-[#315A2E]"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <button
                          onClick={() => {handleQuantityChange(quantity - 1)}}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 cursor-pointer"
                        >
                          <i className="fas fa-minus text-xs"></i>
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => {handleQuantityChange(parseInt(e.target.value) || 1)}}
                          className="w-12 mx-2 text-center border-none focus:outline-none text-gray-700"
                        />
                        <button
                          onClick={() => {handleQuantityChange(quantity + 1)}}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 cursor-pointer"
                        >
                          <i className="fas fa-plus text-xs"></i>
                        </button>
                      </div>

                      <a
                        href="https://readdy.ai/home/a8d860a4-376e-449f-a1ea-908a12956ab4/5b3b3d57-a7d0-4fdc-87ca-5c4ea285313e"
                        data-readdy="true"
                        className="text-[#315A2E] hover:text-[#264723] text-sm font-medium cursor-pointer"
                      >
                        View more details
                      </a>
                    </div>

                    <button
                      className="mt-4 w-full bg-[#315A2E] text-white py-3 rounded-md hover:bg-[#264723] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                      onClick={() => {
                        // Add to cart functionality would go here
                        alert(
                          `${quantity} ${selectedProduct.title}(s) added to cart!`
                        );
                        closeModal();
                      }}
                    >
                      Add to Cart - $
                      {(selectedProduct.price * quantity).toFixed(2)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
