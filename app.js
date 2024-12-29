import React, { useState } from 'react';
import { X } from 'lucide-react';

const DOMTestPage = () => {
  const [listItems, setListItems] = useState(['Initial item']);
  const [showModal, setShowModal] = useState(false);
  const [textContent, setTextContent] = useState('Original text');
  const [elementAttributes, setElementAttributes] = useState({
    class: 'text-blue-500',
    'data-test': 'original'
  });

  // Add list item
  const addListItem = () => {
    setListItems([...listItems, `Item ${listItems.length + 1}`]);
  };

  // Remove list item
  const removeListItem = (index) => {
    setListItems(listItems.filter((_, i) => i !== index));
  };

  // Toggle modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Change text content
  const changeText = () => {
    setTextContent(prev => 
      prev === 'Original text' ? 'Modified text' : 'Original text'
    );
  };

  // Toggle element attributes
  const toggleAttributes = () => {
    setElementAttributes(prev => ({
      class: prev.class === 'text-blue-500' ? 'text-red-500' : 'text-blue-500',
      'data-test': prev['data-test'] === 'original' ? 'modified' : 'original'
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">DOM Modification Test Page</h1>
        
        {/* List Modification Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">List Modification Test</h2>
          <button 
            onClick={addListItem}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            Add List Item
          </button>
          <ul className="space-y-2">
            {listItems.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center justify-between bg-gray-50 p-2 rounded"
              >
                {item}
                <button
                  onClick={() => removeListItem(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Modal Test Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Modal Test</h2>
          <button 
            onClick={toggleModal}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Toggle Modal
          </button>
          
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold mb-4">Test Modal</h3>
                <p className="mb-4">This is a test modal that modifies the DOM structure.</p>
                <button 
                  onClick={toggleModal}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close Modal
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Text Content Modification */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Text Content Test</h2>
          <p className="mb-4">{textContent}</p>
          <button 
            onClick={changeText}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Toggle Text
          </button>
        </section>

        {/* Attribute Modification */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Attribute Test</h2>
          <div 
            className={elementAttributes.class}
            data-test={elementAttributes['data-test']}
          >
            Element with modifiable attributes
          </div>
          <button 
            onClick={toggleAttributes}
            className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Toggle Attributes
          </button>
        </section>
      </div>
    </div>
  );
};

export default DOMTestPage;