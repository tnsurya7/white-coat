'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  area: string;
  image: string;
  type: string;
}

interface PropertiesGridProps {
  searchQuery: string;
  typeFilter: string;
  budgetFilter: string;
}

const PropertiesGrid = ({ searchQuery, typeFilter, budgetFilter }: PropertiesGridProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const allProperties: Property[] = [
    {
      id: 1,
      title: 'Luxury Villa in Goa',
      location: 'North Goa, India',
      price: '₹4.5 Cr',
      priceValue: 4.5,
      beds: 4,
      baths: 5,
      area: '3500 sq ft',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      type: 'Villa',
    },
    {
      id: 2,
      title: 'Premium Apartment Mumbai',
      location: 'Bandra West, Mumbai',
      price: '₹6.2 Cr',
      priceValue: 6.2,
      beds: 3,
      baths: 4,
      area: '2800 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      type: 'Apartment',
    },
    {
      id: 3,
      title: 'Penthouse Bangalore',
      location: 'Whitefield, Bangalore',
      price: '₹5.8 Cr',
      priceValue: 5.8,
      beds: 4,
      baths: 4,
      area: '4200 sq ft',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      type: 'Penthouse',
    },
    {
      id: 4,
      title: 'Sea View Villa Kerala',
      location: 'Kochi, Kerala',
      price: '₹3.8 Cr',
      priceValue: 3.8,
      beds: 5,
      baths: 5,
      area: '4000 sq ft',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      type: 'Villa',
    },
    {
      id: 5,
      title: 'Modern Apartment Delhi',
      location: 'South Delhi, Delhi',
      price: '₹7.5 Cr',
      priceValue: 7.5,
      beds: 4,
      baths: 5,
      area: '3200 sq ft',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      type: 'Apartment',
    },
    {
      id: 6,
      title: 'Heritage Villa Jaipur',
      location: 'Civil Lines, Jaipur',
      price: '₹5.2 Cr',
      priceValue: 5.2,
      beds: 6,
      baths: 6,
      area: '5000 sq ft',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      type: 'Villa',
    },
    {
      id: 7,
      title: 'Prime Land in Lonavala',
      location: 'Lonavala, Maharashtra',
      price: '₹2.5 Cr',
      priceValue: 2.5,
      beds: 0,
      baths: 0,
      area: '5000 sq ft',
      image: 'https://www.santiamestates.com/blog/admin/assets/img/post/image_2025-04-30-12-43-48_68121b0442490.jpg',
      type: 'Land',
    },
    {
      id: 8,
      title: 'Agricultural Land Pune',
      location: 'Pune Outskirts, Maharashtra',
      price: '₹1.8 Cr',
      priceValue: 1.8,
      beds: 0,
      baths: 0,
      area: '10000 sq ft',
      image: 'https://www.roofandfloor.com/project/7372/salepageimages/Anandham_Township_1.jpg',
      type: 'Land',
    },
    {
      id: 9,
      title: 'Residential Plot Gurgaon',
      location: 'Sector 57, Gurgaon',
      price: '₹3.2 Cr',
      priceValue: 3.2,
      beds: 0,
      baths: 0,
      area: '3600 sq ft',
      image: 'https://4.imimg.com/data4/CQ/TD/MY-24860456/land-plots-for-sale-near-narasapura-industrial-area-1000x1000.jpg',
      type: 'Land',
    },
    {
      id: 10,
      title: 'Beachfront Land Goa',
      location: 'Candolim, Goa',
      price: '₹4.8 Cr',
      priceValue: 4.8,
      beds: 0,
      baths: 0,
      area: '6000 sq ft',
      image: 'https://dynamic.realestateindia.com/prop_images/2318122/1002103_1-200x200.jpg',
      type: 'Land',
    },
  ];

  // Filter properties based on search, type, and budget
  const filteredProperties = allProperties.filter((property) => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.type.toLowerCase().includes(searchQuery.toLowerCase());

    // Type filter
    const matchesType = typeFilter === '' || property.type === typeFilter;

    // Budget filter
    let matchesBudget = true;
    if (budgetFilter === '0-1') {
      matchesBudget = property.priceValue < 1;
    } else if (budgetFilter === '2-4') {
      matchesBudget = property.priceValue >= 2 && property.priceValue <= 4;
    } else if (budgetFilter === '4-6') {
      matchesBudget = property.priceValue > 4 && property.priceValue <= 6;
    } else if (budgetFilter === '6+') {
      matchesBudget = property.priceValue > 6;
    }

    return matchesSearch && matchesType && matchesBudget;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  if (filteredProperties.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-600">No properties found matching your criteria.</p>
        <p className="text-gray-500 mt-2">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {filteredProperties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Link href={`/properties/${property.id}`}>
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </Link>
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                {property.type}
              </div>
              <button
                onClick={() => toggleFavorite(property.id)}
                className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:scale-110 transition-transform"
                aria-label="Add to favorites"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.includes(property.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-700'
                  }`}
                />
              </button>
            </div>

            <div className="p-6">
              <Link href={`/properties/${property.id}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {property.title}
                </h3>
              </Link>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>

              <div className="flex items-center justify-between text-gray-700 mb-4 pb-4 border-b border-gray-200">
                {property.type !== 'Land' ? (
                  <>
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{property.beds}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">{property.baths}</span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-semibold text-gold-600">Plot Area</span>
                  </div>
                )}
                <div className="flex items-center space-x-1">
                  <Square className="w-4 h-4" />
                  <span className="text-sm">{property.area}</span>
                </div>
              </div>

              <Link
                href={`/properties/${property.id}`}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                View Details
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PropertiesGrid;
