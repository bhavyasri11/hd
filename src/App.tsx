import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        {/* Comment inside JSX block */}
<h1 className="text-4xl font-bold">Human Documentary</h1>

        {/* Removed the inline comment to prevent errors */}
        <p className="text-lg mt-2">Exploring the beauty of human stories</p>
      </header>

      {/* About Section */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold">About the Documentary</h2>
        <p className="mt-4 text-lg">
          This documentary captures the essence of human emotions, struggles,
          and triumphs across different cultures and communities.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-300 h-40 rounded-lg"></div>
          <div className="bg-gray-300 h-40 rounded-lg"></div>
          <div className="bg-gray-300 h-40 rounded-lg"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-8">
        <p>&copy; 2025 Human Documentary. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
