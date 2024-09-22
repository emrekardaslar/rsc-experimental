import usePropertyViewModel from "../Views/Property/ViewModel";

const SomeComponent = () => {
  const { state, handleUpdatePropertyOne, handleUpdatePropertyTwo } =
    usePropertyViewModel();

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        Property One: <span className="font-normal">{state.propertyOne}</span>
      </h1>
      <h2 className="text-lg text-gray-600 mb-6">
        Property Two: <span className="font-normal">{state.propertyTwo}</span>
      </h2>

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => handleUpdatePropertyOne()}
        >
          Update Property One
        </button>

        <button
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => handleUpdatePropertyTwo()}
        >
          Update Property Two
        </button>
      </div>
    </div>
  );
};

export default SomeComponent;
