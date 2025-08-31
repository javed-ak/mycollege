'use client';

import { Trophy, Star } from 'lucide-react';

const class10Toppers = [
  {
    id: 1,
    name: 'Emma Wilson',
    percentage: '98.5%',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Chen',
    percentage: '97.8%',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    percentage: '97.2%',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  }
];

const class12Toppers = [
  {
    id: 1,
    name: 'David Park',
    percentage: '99.2%',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Ava Thompson',
    percentage: '98.9%',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Ryan Kumar',
    percentage: '98.4%',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  }
];

interface TopperCardProps {
  topper: typeof class10Toppers[0];
  rank: number;
}

function TopperCard({ topper, rank }: TopperCardProps) {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-yellow-400 text-yellow-900';
      case 2: return 'bg-gray-300 text-gray-700';
      case 3: return 'bg-amber-600 text-amber-100';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative">
        <div className="w-full h-48 overflow-hidden">
          <img
            src={topper.image}
            alt={topper.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center ${getRankColor(rank)}`}>
          <span className="font-bold text-sm">{rank}</span>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{topper.name}</h3>
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="text-2xl font-bold text-blue-600">{topper.percentage}</span>
        </div>
        <div className="flex justify-center">
          <Trophy className="w-6 h-6 text-amber-500" />
        </div>
      </div>
    </div>
  );
}

export default function Toppers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Academic Achievers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating the outstanding academic performance of our students who have set new benchmarks of excellence.
          </p>
        </div>

        {/* Class 10th Toppers */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-100 px-6 py-2 rounded-full">
              <h3 className="text-xl font-bold text-green-800">Class 10th Toppers</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {class10Toppers.map((topper, index) => (
              <TopperCard key={topper.id} topper={topper} rank={index + 1} />
            ))}
          </div>
        </div>

        {/* Class 12th Toppers */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-purple-100 px-6 py-2 rounded-full">
              <h3 className="text-xl font-bold text-purple-800">Class 12th Toppers</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {class12Toppers.map((topper, index) => (
              <TopperCard key={topper.id} topper={topper} rank={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}