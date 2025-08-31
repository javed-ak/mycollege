'use client';

import Link from 'next/link';
import { Camera, Video, Image as ImageIcon } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    title: 'Science Laboratory',
    category: 'facilities'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    title: 'Campus Life',
    category: 'campus'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    title: 'Sports Day 2024',
    category: 'events'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    title: 'Modern Classrooms',
    category: 'facilities'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    title: 'Graduation Ceremony',
    category: 'events'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    title: 'Library',
    category: 'facilities'
  }
];

export default function GalleryPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our vibrant campus life, modern facilities, and memorable moments through our photo gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Camera className="w-5 h-5" />
            <span>View Full Gallery</span>
          </Link>
        </div>
      </div>
    </section>
  );
}