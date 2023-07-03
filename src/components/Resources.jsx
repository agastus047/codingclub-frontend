import { useState } from "react";
import ResourceCard from "./ResourceCard";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Resources = () => {
  const items = [
    { section: 'All', category: 'All' },
    { section: 'Web Development', category: 'Web Development' },
    { section: 'AI/ML', category: 'AI/ML' },
    { section: 'Cyber Security', category: 'Cyber Security' },
    { section: 'App Development', category: 'App Development' }
    // Add more sections as needed
  ];

  const allResources = [
    {
      id: 0,
      name: 'Javascript Learning Pack',
      descp: 'An extensive collection of the best JavaScript Learning Materials for you to start your JS Journey.',
      category: 'Web Development'
    },
    {
      id: 1,
      name: 'App Development Crash Course',
      descp: 'An extensive collection of the best JavaScript Learning Materials for you to start your JS Journey.',
      category: 'App Development'
    },
    {
      id: 2,
      name: 'Machine Learning Basics',
      descp: 'An extensive collection of the best JavaScript Learning Materials for you to start your JS Journey.',
      category: 'AI/ML'
    },
    {
      id: 3,
      name: 'AI Learning Basics',
      descp: 'An extensive collection of the best JavaScript Learning Materials for you to start your JS Journey.',
      category: 'AI/ML'
    }
    // Add more resources as needed
  ];

  const [selectedSection, setSelectedSection] = useState('All');

  const filteredResources = selectedSection === 'All'
    ? allResources
    : allResources.filter(resource => resource.category === selectedSection);

  const renderedCards = filteredResources.map(resource => (
    <ResourceCard key={resource.id} item={resource} />
  ));

  const handleCarouselChange = (index) => {
    setSelectedSection(items[index].category);
  };

  return (
    <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14 gap-4">
      <div className="flex sm:mt-7 mb-24">
        <div className="font-black text-4xl sm:text-6xl">RESOURCES</div>
        <div className="flex-auto border-b-4 mb-2 ml-2"></div>
      </div>
      <Carousel
        showStatus={false}
        className="mr-16 ml-16 md:mr-64 md:ml-64"
        onChange={handleCarouselChange}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-black text-white cursor-pointer"
          >
            {item.section}
          </div>
        ))}
      </Carousel>
      <div className="flex flex-col gap-4">
        {renderedCards.length > 0 ? (
          renderedCards
        ) : (
          <div className="text-center text-xl font-bold">No resources found</div>
        )}
      </div>
    </div>
  );
};

export default Resources;
