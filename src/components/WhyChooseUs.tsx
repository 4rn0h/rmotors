// src/components/WhyChooseUs.tsx (Example structure - update based on your actual file)
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section bg-neutral"> {/* Assumed light background */}
      <div className="container-custom text-center">
        <h2 className="text-4xl font-heading font-medium mb-4 text-primary">Why Choose Us?</h2> {/* Text for light background */}
        <p className="text-primary mb-8"> {/* Text for light background */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* ... other content ... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-heading font-medium mb-2 text-primary">Expert Sourcing</h3> {/* Text for white card */}
            <p className="text-gray-700 text-primary">We find the best vehicles for you.</p> {/* Text for white card */}
          </div>
          {/* ... more items */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;