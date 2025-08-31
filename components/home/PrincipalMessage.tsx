'use client';

import { useState } from 'react';
import { Quote } from 'lucide-react';

export default function PrincipalMessage() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Principal's Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-yellow-800" />
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Principal's Message
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                "Welcome to St. Mary's College, where we believe every student has the potential to excel. 
                Our commitment to academic excellence, character building, and holistic development has been 
                unwavering for over six decades."
              </p>
              {showFullMessage && (
                <>
                  <p>
                    "We strive to create an environment that fosters creativity, critical thinking, and moral values. 
                    Our dedicated faculty and comprehensive curriculum ensure that our students are well-prepared 
                    for the challenges of the modern world."
                  </p>
                  <p>
                    "As we continue our journey toward educational excellence, we invite you to be part of our 
                    vibrant community. Together, we will shape the leaders and innovators of tomorrow."
                  </p>
                </>
              )}
            </div>
            <div className="mt-6">
              <p className="font-semibold text-yellow-300 mb-2">Dr. Sarah Johnson</p>
              <p className="text-blue-200 mb-6">Principal, St. Mary's College</p>
              <button
                onClick={() => setShowFullMessage(!showFullMessage)}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {showFullMessage ? 'Read Less' : 'Read Full Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}