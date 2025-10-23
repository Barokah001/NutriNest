interface BMIData {
  weight: number | "";
  height: number | "";
  age: number | "";
  gender: string | null;
  onClose: () => void;
}

const ResultOverlay = ({ weight, height, age, gender, onClose }: BMIData) => {
  if (height === "" || weight === "" || age === "") return null;

  const heightInMeters = Number(height) / 100;
  const bmi = Number(
    (Number(weight) / (heightInMeters * heightInMeters)).toFixed(1)
  );

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "bg-blue-400" };
    if (bmi < 25) return { label: "Normal", color: "bg-green-500" };
    if (bmi < 30) return { label: "Overweight", color: "bg-yellow-400" };
    return { label: "Obese", color: "bg-red-500" };
  };

  const getHealthyWeightRange = (height: number) => {
    const heightInMeters = height / 100;
    const min = (18.5 * heightInMeters * heightInMeters).toFixed(1);
    const max = (24.9 * heightInMeters * heightInMeters).toFixed(1);
    return { min, max };
  };

  const category = getBMICategory(bmi);
  const healthyRange = getHealthyWeightRange(Number(height));

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-sm bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-2xl relative">
        {/* Title */}
        <h1 className="text-center text-gray-700 text-lg font-medium mb-4">
          Your BMI:
        </h1>

        {/* BMI Value */}
        <div className="text-center mb-4">
          <p className="text-6xl font-bold text-blue-950">{bmi}</p>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center mb-6">
          <span
            className={`${category.color} text-white px-4 py-1 rounded-full text-sm font-semibold`}
          >
            {category.label}
          </span>
        </div>

        {/* Data Display */}
        <div className="grid grid-cols-4 gap-4 mb-8 text-center">
          <div>
            <p className="text-2xl font-bold text-green-700">{weight}</p>
            <p className="text-xs text-gray-500 mt-1">Weight</p>
            <p className="text-xs text-gray-400">kg</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-700">{height}</p>
            <p className="text-xs text-gray-500 mt-1">Height</p>
            <p className="text-xs text-gray-400">cm</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-700">{age}</p>
            <p className="text-xs text-gray-500 mt-1">Age</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-700 capitalize">
              {gender}
            </p>
            <p className="text-xs text-gray-500 mt-1">Gender</p>
          </div>
        </div>

        {/* Healthy Weight Range */}
        <div className="bg-white bg-opacity-50 rounded-lg p-4 mb-6 text-center">
          <p className="text-gray-700 font-medium mb-2">
            Healthy height for your weight:
          </p>
          <p className="text-green-600 font-bold text-lg">
            {healthyRange.min} kg - {healthyRange.max} kg
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-4 rounded-full transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResultOverlay;
