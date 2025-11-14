import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HomeIcon, 
  ExclamationTriangleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center py-8 px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <ExclamationTriangleIcon className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">404</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-2">
          Oops! The page you're looking for seems to have flown away.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Don't worry, even the best gig workers sometimes take wrong turns!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <HomeIcon className="w-4 h-4" />
            Back to Home
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-3">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-xs text-amber-600 hover:text-amber-700 font-medium hover:underline"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/dashboard/search-jobs')}
              className="text-xs text-amber-600 hover:text-amber-700 font-medium hover:underline"
            >
              Find Gigs
            </button>
            <button
              onClick={() => navigate('/sign-in')}
              className="text-xs text-amber-600 hover:text-amber-700 font-medium hover:underline"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Fun Illustration */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-amber-100 rounded-full p-4">
            <div className="text-4xl">🐝</div>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Our busy bees couldn't find this page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;