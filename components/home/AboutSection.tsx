'use client';

import { useState } from 'react';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  const stats = [
    { icon: GraduationCap, label: 'Years of Excellence', value: '60+' },
    { icon: Users, label: 'Students Enrolled', value: '2,500+' },
    { icon: Award, label: 'Awards Won', value: '150+' },
    { icon: BookOpen, label: 'Courses Offered', value: '25+' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About St. Mary's College
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Established in 1965, St. Mary's College has been a beacon of educational excellence for over six decades. 
                We are committed to providing quality education that nurtures not just academic growth but also character development.
              </p>
              {showMore && (
                <>
                  <p>
                    Our institution offers a comprehensive range of programs from elementary through higher secondary education, 
                    with a focus on holistic development. We believe in creating an environment where students can explore their 
                    potential, develop critical thinking skills, and prepare for future challenges.
                  </p>
                  <p>
                    With state-of-the-art facilities, experienced faculty, and a student-centric approach, we have consistently 
                    produced outstanding results in both academic and extracurricular activities. Our alumni have gone on to 
                    excel in various fields, making us proud of our educational legacy.
                  </p>
                </>
              )}
            </div>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}