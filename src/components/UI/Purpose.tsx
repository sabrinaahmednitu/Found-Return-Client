'use client';
import {
  FaHandHoldingHeart,
  FaSearch,
  FaRecycle,
  FaUsers,
} from 'react-icons/fa';

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
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-12">
            <a
              href="/post-item"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              Post a Lost/Found Item
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
