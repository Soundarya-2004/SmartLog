import { useState, useEffect } from 'react';
import { IndianRupee, TrendingUp, PieChart, BarChart3, Sparkles, ArrowRight, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const features = [
    { 
      icon: IndianRupee, 
      title: 'Track Expenses', 
      desc: 'Monitor every rupee', 
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-500'
    },
    { 
      icon: TrendingUp, 
      title: 'Smart Analytics', 
      desc: 'Insights that matter', 
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-400 to-pink-500'
    },
    { 
      icon: BarChart3, 
      title: 'Budget Goals', 
      desc: 'Stay on track', 
      color: 'from-pink-400 to-red-500',
      bgColor: 'bg-gradient-to-br from-pink-400 to-red-500'
    },
    { 
      icon: PieChart, 
      title: 'Visual Reports', 
      desc: 'See your spending', 
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-gradient-to-br from-green-400 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Main Content Section - SmartLog Branding Left, Device Mockup Right */}
        <div className="flex items-center justify-between mb-20">
          {/* Left Side - SmartLog Branding */}
          <div className="flex-1 max-w-lg ml-16">
            <div className="mb-8">
              {/* SmartLog Logo */}
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-black text-gray-800 mb-4">SmartLog</h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your financial future with AI-powered insights, beautiful visualizations, and smart automation.
                </p>
              </div>
            </div>
            
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Get Started</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Right Side - Device Mockup Image */}
          <div className="flex-1 flex justify-end">
            <img 
              src="/laptop_mobile_mockup.png" 
              alt="SmartLog Mobile and Laptop Mockup" 
              className="w-auto h-[500px] object-contain"
            />
          </div>
        </div>

        {/* Bottom Section - Feature Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredFeature === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { 
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                className={`group p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  isHovered ? 'border-2 border-purple-200' : 'border border-gray-100'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${feature.bgColor} flex items-center justify-center`}
                  whileHover={{ 
                    scale: 1.08, 
                    rotate: 3,
                    transition: { 
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-gray-800 mb-3 text-center text-xl">{feature.title}</h3>
                <p className="text-base text-gray-500 text-center group-hover:text-gray-600 transition-colors duration-300">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}