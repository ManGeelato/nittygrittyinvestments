import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  MessageCircle, 
  Share2, 
  Heart,
  Users,
  Eye,
  TrendingUp
} from 'lucide-react';

const SocialMediaLinks = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://facebook.com/nittygritty',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-500',
      handle: '@NittyGrittySA',
      followers: '2.8K',
      description: 'Project showcases and client testimonials'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com/nittygritty_sa',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      handle: '@nittygritty_sa',
      followers: '3.5K',
      description: 'Behind-the-scenes and transformation stories'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/company/nittygritty',
      color: 'from-blue-700 to-blue-900',
      bgColor: 'bg-blue-700',
      handle: 'Nitty Gritty Investment Co.',
      followers: '1.2K',
      description: 'Business updates and industry insights'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/nittygritty_sa',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-400',
      handle: '@nittygritty_sa',
      followers: '1.8K',
      description: 'Quick tips and industry news'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      url: 'https://youtube.com/c/nittygritty',
      color: 'from-red-600 to-red-800',
      bgColor: 'bg-red-600',
      handle: 'Nitty Gritty SA',
      followers: '1.5K',
      description: 'Project tutorials and success stories'
    }
  ];

  const recentContent = [
    {
      platform: 'Instagram',
      type: 'Project Reveal',
      title: 'Johannesburg Office Renovation',
      engagement: '245 likes, 42 comments',
      image: '/images/social/instagram-project.jpg'
    },
    {
      platform: 'Facebook',
      type: 'Client Testimonial',
      title: 'Client Success Story - Durban Garden',
      engagement: '189 reactions, 31 shares',
      image: '/images/social/facebook-testimonial.jpg'
    },
    {
      platform: 'YouTube',
      type: 'Tutorial',
      title: 'Sustainable Gardening Tips',
      engagement: '1.2K views, 56 likes',
      image: '/images/social/youtube-tutorial.jpg'
    }
  ];

  const socialStats = [
    { icon: <Users className="w-5 h-5" />, value: '10K+', label: 'Total Followers' },
    { icon: <Eye className="w-5 h-5" />, value: '50K+', label: 'Monthly Reach' },
    { icon: <Heart className="w-5 h-5" />, value: '95%', label: 'Positive Engagement' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '200+', label: 'Projects Shared' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Connect With <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Nitty Gritty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow us on social media for project updates, expert tips, behind-the-scenes content, 
            and inspiring transformations from across South Africa.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Social Platforms Grid */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Share2 className="w-6 h-6 text-amber-500" />
                <h3 className="text-2xl font-bold text-gray-900">Follow Our Journey</h3>
              </div>
              
              <div className="grid gap-4">
                {socialPlatforms.map((platform, index) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      {/* Platform Icon */}
                      <div className={`w-12 h-12 ${platform.bgColor} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {platform.icon}
                      </div>

                      {/* Platform Info */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-gray-900 text-lg">{platform.name}</h4>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {platform.followers} followers
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{platform.handle}</p>
                        <p className="text-gray-500 text-xs">{platform.description}</p>
                      </div>

                      {/* Hover Arrow */}
                      <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Stats */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6 text-center">Our Social Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-amber-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Content & Engagement */}
          <div className="space-y-8">
            {/* Recent Highlights */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-amber-500" />
                <h3 className="text-2xl font-bold text-gray-900">Recent Highlights</h3>
              </div>

              <div className="space-y-4">
                {recentContent.map((content, index) => (
                  <div key={index} className="group border border-gray-200 rounded-xl p-4 hover:border-amber-300 transition-all duration-300">
                    <div className="flex gap-4">
                      {/* Content Image Placeholder */}
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          content.platform === 'Instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                          content.platform === 'Facebook' ? 'bg-blue-500' :
                          'bg-red-500'
                        }`}>
                          {content.platform === 'Instagram' ? <Instagram className="w-4 h-4" /> :
                           content.platform === 'Facebook' ? <Facebook className="w-4 h-4" /> :
                           <Youtube className="w-4 h-4" />}
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                            {content.platform}
                          </span>
                          <span className="text-xs text-gray-500">{content.type}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                          {content.title}
                        </h4>
                        <p className="text-sm text-gray-500">{content.engagement}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Follow Us */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-amber-500" />
                <h3 className="text-2xl font-bold text-gray-900">Why Follow Us?</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Exclusive Project Reveals</h4>
                    <p className="text-gray-600 text-sm">Be the first to see our latest transformations and success stories.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Tips & Advice</h4>
                    <p className="text-gray-600 text-sm">Get professional insights for architecture, gardening, and property maintenance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Behind-the-Scenes</h4>
                    <p className="text-gray-600 text-sm">See our teams in action across Johannesburg, Durban, and Cape Town.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Special Offers</h4>
                    <p className="text-gray-600 text-sm">Exclusive discounts and promotions for our social media followers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-amber-100 mb-4">
                Subscribe to our newsletter for monthly insights and exclusive content.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Growing Community</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with us on social media to be part of the Nitty Gritty family and stay 
              informed about our latest projects and industry insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialPlatforms.slice(0, 3).map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${platform.bgColor}`}
                >
                  Follow on {platform.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;