'use client';

import { useState } from 'react';
import { Camera, Filter, Image as ImageIcon, Video } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    title: 'Campus Overview',
    category: 'campus',
    type: 'image'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    title: 'Classroom Learning',
    category: 'academics',
    type: 'image'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    title: 'Science Laboratory',
    category: 'facilities',
    type: 'image'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    title: 'Modern Classroom',
    category: 'facilities',
    type: 'image'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    title: 'Graduation Day',
    category: 'events',
    type: 'image'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    title: 'Library',
    category: 'facilities',
    type: 'image'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    title: 'Sports Day',
    category: 'events',
    type: 'image'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    title: 'Art Class',
    category: 'academics',
    type: 'image'
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    title: 'Student Activities',
    category: 'events',
    type: 'image'
  }
];

const categories = [
  { value: 'all', label: 'All Photos' },
  { value: 'campus', label: 'Campus' },
  { value: 'academics', label: 'Academics' },
  { value: 'facilities', label: 'Facilities' },
  { value: 'events', label: 'Events' }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-purple-600 to-purple-800 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <Camera className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our vibrant campus life through images and videos
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.type === 'video' ? (
                      <Video className="w-12 h-12 mx-auto mb-2" />
                    ) : (
                      <ImageIcon className="w-12 h-12 mx-auto mb-2" />
                    )}
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm capitalize">{item.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded text-xs font-medium capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}