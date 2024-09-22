import usePropertyViewModel from "./ViewModel";
import Button from "../../components/Button";

function PropertyView() {
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
        <Button
          onClick={handleUpdatePropertyOne}
          text="Update Property One"
          color="blue"
        />
        <Button
          onClick={handleUpdatePropertyTwo}
          text="Update Property Two"
          color="green"
        />
      </div>
    </div>
  );
}

export default PropertyView;
