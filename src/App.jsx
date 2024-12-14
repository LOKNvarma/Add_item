import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    englishName: "",
    hindiName: "",
    category: "",
    price: "",
    image: null,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800">Add Item</h2>

        <div>
          <label className="block text-gray-700">English Name</label>
          <input
            type="text"
            name="englishName"
            value={formData.englishName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Hindi Name</label>
          <input
            type="text"
            name="hindiName"
            value={formData.hindiName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            accept="image/*"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {/* Display Section */}
      {submittedData && (
        <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg mt-6">
          <h2 className="text-xl font-bold text-gray-800">Submitted Data</h2>
          <div className="mt-4">
            <p>
              <strong>English Name:</strong> {submittedData.englishName}
            </p>
            <p>
              <strong>Hindi Name:</strong> {submittedData.hindiName}
            </p>
            <p>
              <strong>Category:</strong> {submittedData.category}
            </p>
            <p>
              <strong>Price:</strong> ₹{submittedData.price}
            </p>
            {submittedData.image && (
              <div className="mt-4">
                <p className="font-bold">Image:</p>
                <img
                  src={URL.createObjectURL(submittedData.image)}
                  alt="Uploaded"
                  className="w-full h-auto rounded"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;