import React, { useState } from "react";
// Removed motion imports - using CSS fade effects instead
import { useNavigate } from "react-router-dom";
import { useHideScrollbar } from "../hooks/useHideScrollbar";

const BlogsPage = () => {
  useHideScrollbar();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Mining", "Sustainability", "Technology", "Industry News"];

  const blogs = [
    {
      id: 1,
      title: "The Future of Sustainable Mining Practices",
      excerpt: "Exploring innovative approaches to environmentally responsible mineral extraction and processing.",
      category: "Sustainability",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "/assets/sustainability-bg.webp",
      featured: true
    },
    {
      id: 2,
      title: "Ball Clay Applications in Modern Ceramics",
      excerpt: "Understanding the properties and applications of high-grade ball clay in ceramic manufacturing.",
      category: "Technology",
      date: "January 10, 2025",
      readTime: "7 min read",
      image: "/assets/ball-clay.webp"
    },
    {
      id: 3,
      title: "Kaolin: The Versatile White Clay",
      excerpt: "Discover the diverse applications of kaolin across paper, ceramics, and pharmaceutical industries.",
      category: "Industry News",
      date: "January 5, 2025",
      readTime: "6 min read",
      image: "/assets/kaolin.webp"
    },
    {
      id: 4,
      title: "Mining Innovation and Technology Trends",
      excerpt: "Latest technological advancements revolutionizing the mining and mineral processing industry.",
      category: "Mining",
      date: "December 28, 2024",
      readTime: "8 min read",
      image: "/assets/mining-bg.webp"
    },
    {
      id: 5,
      title: "Feldspar in Glass Manufacturing",
      excerpt: "The crucial role of feldspar minerals in modern glass production and manufacturing processes.",
      category: "Technology",
      date: "December 20, 2024",
      readTime: "4 min read",
      image: "/assets/feldspar.webp"
    },
    {
      id: 6,
      title: "Environmental Impact Assessment in Mining",
      excerpt: "Comprehensive guide to conducting environmental assessments for sustainable mining operations.",
      category: "Sustainability",
      date: "December 15, 2024",
      readTime: "9 min read",
      image: "/assets/environmental-bg.webp"
    }
  ];

  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-futura product-page">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div>
            {/* Logo and Back Button Row */}
            <div className="flex justify-between items-center mb-8">
              <img 
                src="/assets/jld-logo.png" 
                alt="JLD Minerals" 
                className="h-8 w-auto"
                loading="lazy"
              />
              <button 
                onClick={() => navigate('/home')}
                className="text-gray-600 hover:text-jldBlue transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span>Back to Products</span>
              </button>
            </div>

            {/* Title Section */}
            <div className="mb-16 mt-12">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-light text-jldBlue mb-4 leading-none tracking-tight"
              >
                Our <span className="text-jldRed font-normal">Blogs</span>
              </h1>
              
              <p 
                className="text-xl md:text-2xl text-gray-500 mb-6 font-light leading-relaxed max-w-3xl"
              >
                Insights, innovations, and industry expertise from the world of minerals and mining
              </p>

              <div 
                className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed"
              />
            </div>
          </div>

      {/* Category Filter */}
      <div
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-jldBlue text-white shadow-lg"
                  : "bg-white text-jldBlue border border-jldBlue/20 hover:border-jldBlue hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Blog */}
        {filteredBlogs.find(blog => blog.featured) && (
          <div
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src={filteredBlogs.find(blog => blog.featured)?.image}
                    alt={filteredBlogs.find(blog => blog.featured)?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-jldRed text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="bg-jldBlue/10 text-jldBlue px-3 py-1 rounded-full">
                      {filteredBlogs.find(blog => blog.featured)?.category}
                    </span>
                    <span>{filteredBlogs.find(blog => blog.featured)?.date}</span>
                    <span>•</span>
                    <span>{filteredBlogs.find(blog => blog.featured)?.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-light text-jldBlue mb-4">
                    {filteredBlogs.find(blog => blog.featured)?.title}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {filteredBlogs.find(blog => blog.featured)?.excerpt}
                  </p>
                  <button className="bg-jldBlue text-white px-6 py-3 rounded-lg hover:bg-jldBlue/90 transition-colors self-start">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBlogs.filter(blog => !blog.featured).map((blog, index) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-jldBlue px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-light text-jldBlue mb-3 group-hover:text-jldRed transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>
                <button className="text-jldBlue hover:text-jldRed transition-colors font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl text-gray-600 mb-2">No blogs found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Newsletter Subscription */}
      <div
        className="bg-gradient-to-r from-jldBlue to-jldBlue/90 text-white py-16 px-6 mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light mb-6">
            Stay Updated with Our <span className="text-jldRed font-normal">Latest Insights</span>
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on mining innovations, sustainability practices, and industry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jldRed"
            />
            <button className="bg-jldRed text-white px-8 py-4 rounded-lg hover:bg-jldRed/90 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;