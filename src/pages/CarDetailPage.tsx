import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/mockData';
import ImageGallery from '../components/ImageGallery';
import EnquiryForm from '../components/EnquiryForm';
import {
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Users,
  PaintBucket,
  Palette,
  MessageCircle,
  ArrowLeft,
  Share2,
  DollarSign,
  Truck,
} from 'lucide-react';

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((c) => c.id === id);
  const [activeTab, setActiveTab] = useState<'details' | 'features' | 'enquiry'>('details');

  useEffect(() => {
    if (car) {
      document.title = `${car.make} ${car.model} | RoyaMotorsUK`;
    } else {
      document.title = 'Car Not Found | RoyaMotorsUK';
    }
  }, [car]);

  // Format price with commas
  const formattedPrice = car
    ? new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        maximumFractionDigits: 0,
      }).format(car.price)
    : '';

  if (!car) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom text-center py-16">
          <h1 className="text-3xl font-medium mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-6">The vehicle you are looking for is not available.</p>
          <Link to="/cars" className="btn btn-primary">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Back Link */}
      <div className="container-custom mb-6">
        <Link
          to="/cars"
          className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Collection
        </Link>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image Gallery */}
              <ImageGallery images={car.images} alt={`${car.make} ${car.model}`} />

              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${
                      activeTab === 'details'
                        ? 'border-accent text-accent'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab('details')}
                  >
                    Details
                  </button>
                  <button
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${
                      activeTab === 'features'
                        ? 'border-accent text-accent'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab('features')}
                  >
                    Features
                  </button>
                  <button
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${
                      activeTab === 'enquiry'
                        ? 'border-accent text-accent'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab('enquiry')}
                  >
                    Enquire
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'details' && (
                  <div>
                    <h2 className="text-2xl font-medium mb-4">Vehicle Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center">
                        <Calendar size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Year</p>
                          <p className="font-medium">{car.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Gauge size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Mileage</p>
                          <p className="font-medium">{car.mileage.toLocaleString()} miles</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Fuel size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Fuel Type</p>
                          <p className="font-medium">{car.fuelType}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Settings size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Transmission</p>
                          <p className="font-medium">{car.transmission}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <PaintBucket size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Exterior Color</p>
                          <p className="font-medium">{car.exteriorColor}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Palette size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Interior Color</p>
                          <p className="font-medium">{car.interiorColor}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Engine</p>
                          <p className="font-medium">{car.engineSize}</p>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-medium mb-4">Description</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{car.description}</p>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div>
                    <h2 className="text-2xl font-medium mb-6">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {car.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-accent/10 text-accent rounded-full p-1 mt-1 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'enquiry' && (
                  <div>
                    <h2 className="text-2xl font-medium mb-6">Enquire About This Vehicle</h2>
                    <EnquiryForm carId={car.id} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Summary and Enquiry */}
          <div>
            {/* Summary Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h1 className="text-3xl font-medium mb-2">
                  {car.make} {car.model}
                </h1>
                <div className="flex items-center mb-6">
                  <div className="text-2xl font-medium text-cta">{formattedPrice}</div>
                  {car.status === 'Sold' && (
                    <div className="ml-3 bg-red-600 text-white px-2 py-1 rounded text-xs uppercase font-bold">
                      Sold
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-3 mb-6">
                  <a
                    href="https://wa.me/+447964595923"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Chat on WhatsApp
                  </a>
                  <button
                    onClick={() => setActiveTab('enquiry')}
                    className="btn btn-primary"
                  >
                    Enquire Now
                  </button>
                  <button
                    onClick={() => window.navigator.share({
                      title: `${car.make} ${car.model} | RoyaMotorsUK`,
                      text: `Check out this ${car.year} ${car.make} ${car.model} at RoyaMotorsUK`,
                      url: window.location.href,
                    }).catch(() => alert('Sharing not supported on this browser'))}
                    className="btn btn-outline flex items-center justify-center"
                  >
                    <Share2 size={18} className="mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <DollarSign size={20} className="mr-2 text-accent" />
                  Payment Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We offer flexible payment options including bank transfer, credit card, and
                  financing arrangements.
                </p>
                <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-4">
                  <p className="text-sm text-gray-600">
                    Price shown is in GBP. Contact us for pricing in KES, TZS, or USD.
                  </p>
                </div>
                <Link to="/contact" className="text-cta hover:underline">
                  Contact us for payment details
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Truck size={20} className="mr-2 text-accent" />
                  Shipping & Delivery
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide comprehensive shipping services from the UK to Kenya and Tanzania,
                  including all customs clearance and documentation.
                </p>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Estimated Shipping Time:</span>
                  <span className="font-medium">4-6 weeks</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Shipping Insurance:</span>
                  <span className="font-medium">Included</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Delivery Location:</span>
                  <span className="font-medium">To Your Door</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;