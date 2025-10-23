import { useState } from "react";
import GenderCard from "../components/GenderCard";
import CardInput from "../components/CardInput";
import ResultOverlay from "../components/ResultOverlay";

const BMICalc = () => {
  const [weight, setWeight] = useState<number | "">(65);
  const [age, setAge] = useState<number | "">(26);
  const [height, setHeight] = useState<number | "">(170);
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string>(""); // 👈 new state for error message

  const handleCalculate = () => {
    if (!height || !weight || !age || !gender) {
      setError("⚠️ Please fill in all fields before calculating your BMI.");
      return;
    }

    setError(""); // clear any previous errors
    setShowResult(true);
  };

  return (
    <section className="relative px-6 md:px-20 min-h-screen flex flex-col gap-4 justify-center items-center text-blue-950 font-semibold py-10">
      <h1 className="text-3xl font-bold">BMI Calculator</h1>
      <h3 className="text-lg mb-4">Choose your gender</h3>

      <div>
        <GenderCard gender={gender} setGender={setGender} />
      </div>
        <h1 className="text-lg font-semibold pt-4">
          Please input the correct measurements
        </h1>
      <div className="flex gap-6 justify-center ">
        <CardInput label="Weight (kg)" value={weight} onChange={setWeight} />
        <CardInput label="Age" value={age} onChange={setAge} />
      </div>

      <div className="mt-6 w-full flex justify-center">
        <CardInput label="Height (cm)" value={height} onChange={setHeight} />
      </div>

      {/* 👇 Inline red error message */}
      {error && (
        <p className="text-red-600 text-sm mt-4 font-medium text-center">
          {error}
        </p>
      )}

      <button
        onClick={handleCalculate}
        className="bg-blue-900 text-white px-8 py-3 rounded-2xl text-lg font-semibold hover:bg-blue-950 transition mt-6"
      >
        Calculate BMI
      </button>

      {/*  Result Overlay */}
      {showResult && (
        <ResultOverlay
          weight={weight}
          height={height}
          age={age}
          gender={gender}
          onClose={() => setShowResult(false)}
        />
      )}
    </section>
  );
};

export default BMICalc;
