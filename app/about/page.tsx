import { GraduationCap, Target, Eye, Building2, Users, BookOpen, Award } from 'lucide-react';

export default function About() {
  const facilities = [
    {
      icon: BookOpen,
      title: 'Modern Library',
      description: 'Extensive collection of books, digital resources, and quiet study spaces.'
    },
    {
      icon: Building2,
      title: 'Science Labs',
      description: 'Well-equipped laboratories for Physics, Chemistry, Biology, and Computer Science.'
    },
    {
      icon: Users,
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities including gymnasium and swimming pool.'
    },
    {
      icon: Award,
      title: 'Auditorium',
      description: 'State-of-the-art auditorium for cultural events and academic functions.'
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our rich history, mission, and commitment to educational excellence
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our History</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  St. Mary's College was founded in 1965 with a vision to provide quality education to students 
                  from all backgrounds. What started as a small institution with just 50 students has grown into 
                  one of the most respected educational establishments in the region.
                </p>
                <p>
                  Over the years, we have consistently evolved our teaching methodologies, upgraded our facilities, 
                  and expanded our academic programs to meet the changing needs of society and industry.
                </p>
                <p>
                  Today, we are proud to be home to over 2,500 students and have graduated more than 25,000 alumni 
                  who are making significant contributions to society in various fields.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="School History"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide excellent education that empowers students with knowledge, skills, and values necessary 
                for success in life. We are committed to fostering critical thinking, creativity, and character 
                development in a nurturing and inclusive environment.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution that prepares students to become responsible global citizens 
                and lifelong learners. We envision creating leaders who will contribute positively to society and 
                make a meaningful impact in their chosen fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Facilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide world-class facilities to ensure the best learning environment for our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <facility.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}