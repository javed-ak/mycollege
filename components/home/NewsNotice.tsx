'use client';

import { useState } from 'react';
import { Calendar, ChevronRight, Bell } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'Annual Sports Day 2025',
    date: '2025-01-25',
    content: 'Join us for our annual sports day featuring various athletic competitions and cultural programs.',
    type: 'event'
  },
  {
    id: 2,
    title: 'Semester Examination Schedule',
    date: '2025-01-20',
    content: 'Final semester examinations will commence from February 15th, 2025. Students are advised to prepare accordingly.',
    type: 'notice'
  },
  {
    id: 3,
    title: 'Science Fair Winners Announced',
    date: '2025-01-18',
    content: 'Congratulations to all participants and winners of the Inter-School Science Fair Competition.',
    type: 'news'
  },
  {
    id: 4,
    title: 'New Library Hours',
    date: '2025-01-15',
    content: 'The college library will now be open from 7:00 AM to 9:00 PM on weekdays.',
    type: 'notice'
  }
];

export default function NewsNotice() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'event': return 'bg-green-100 text-green-800';
      case 'notice': return 'bg-yellow-100 text-yellow-800';
      case 'news': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            News & Notices
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important notices from our institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    <Bell className="w-3 h-3 mr-1" />
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(item.date)}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className={`text-gray-600 ${expandedItem === item.id ? '' : 'line-clamp-2'}`}>
                  {item.content}
                </p>

                <button
                  onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium mt-3 transition-colors"
                >
                  {expandedItem === item.id ? 'Read Less' : 'Read More'}
                  <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${expandedItem === item.id ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            View All Notices
          </button>
        </div>
      </div>
    </section>
  );
}