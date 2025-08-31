import { Trophy, Medal, Star, Award, Zap, Users } from 'lucide-react';

export default function Achievements() {
  const academicAchievements = [
    {
      title: 'State Board Toppers',
      description: '15 students secured positions in state top 100',
      year: '2024',
      icon: Trophy
    },
    {
      title: 'Science Olympiad',
      description: 'Gold medals in National Science Olympiad',
      year: '2024',
      icon: Medal
    },
    {
      title: 'Mathematics Competition',
      description: 'First place in Inter-School Mathematics Competition',
      year: '2024',
      icon: Star
    }
  ];

  const sportsAchievements = [
    {
      title: 'Basketball Championship',
      description: 'District level basketball championship winners',
      year: '2024',
      icon: Trophy
    },
    {
      title: 'Swimming Competition',
      description: 'Multiple medals in state swimming championship',
      year: '2024',
      icon: Medal
    },
    {
      title: 'Athletic Meet',
      description: 'Overall champions in inter-school athletic meet',
      year: '2024',
      icon: Award
    }
  ];

  const culturalAchievements = [
    {
      title: 'Drama Festival',
      description: 'Best Performance Award at State Drama Festival',
      year: '2024',
      icon: Star
    },
    {
      title: 'Music Competition',
      description: 'First place in classical music competition',
      year: '2024',
      icon: Trophy
    },
    {
      title: 'Art Exhibition',
      description: 'Recognition at National School Art Exhibition',
      year: '2024',
      icon: Award
    }
  ];

  const AchievementCard = ({ achievement, color }: { achievement: any; color: string }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
      <div className={`inline-flex items-center justify-center w-12 h-12 ${color} rounded-lg mb-4`}>
        <achievement.icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-sm text-gray-500 mb-2">{achievement.year}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
      <p className="text-gray-600">{achievement.description}</p>
    </div>
  );

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-amber-600 to-amber-800 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Celebrating excellence in academics, sports, and cultural activities
            </p>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our students consistently excel in academic competitions and examinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicAchievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} color="bg-blue-600" />
            ))}
          </div>
        </div>
      </section>

      {/* Sports Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sports Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our athletes bring pride to the institution through outstanding performances
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sportsAchievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} color="bg-green-600" />
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cultural Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing creativity and artistic talents on various platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culturalAchievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} color="bg-purple-600" />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98.5%</div>
              <div className="text-blue-200">Pass Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25,000+</div>
              <div className="text-blue-200">Alumni</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60+</div>
              <div className="text-blue-200">Years Legacy</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}