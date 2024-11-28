'use client';
import {
  FaHandHoldingHeart,
  FaSearch,
  FaRecycle,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';
import TestDropdown from './TestDropdown';

export default function Purpose() {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Purpose</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            Connecting people to recover lost items, fostering a sense of
            community, and promoting sustainable practices.
          </p>

          {/* Purpose Points */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaHandHoldingHeart className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Community Connection
              </h3>
              <p className="text-gray-600 mt-2">
                Bridging the gap between those who have lost items and those who
                have found them.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaSearch className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Efficient Search
              </h3>
              <p className="text-gray-600 mt-2">
                Use advanced filters to quickly find or post lost items.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaRecycle className="text-yellow-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Sustainability
              </h3>
              <p className="text-gray-600 mt-2">
                Encourage recycling and reduce waste by returning lost
                belongings.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaUsers className="text-purple-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Fostering Trust
              </h3>
              <p className="text-gray-600 mt-2">
                Build trust within communities by promoting honesty and
                integrity.
              </p>
            </div>
            {/* New Card 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaShieldAlt className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Safe & Secure
              </h3>
              <p className="text-gray-600 mt-2">
                Ensuring a safe platform for users to connect and reclaim their
                lost items securely.
              </p>
            </div>

            {/* New Card 6 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaChartLine className="text-indigo-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Continuous Improvement
              </h3>
              <p className="text-gray-600 mt-2">
                We are committed to enhancing our platform to serve our users
                better every day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
