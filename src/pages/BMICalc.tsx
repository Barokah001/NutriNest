import { useState } from "react";
import GenderCard from "../components/GenderCard";
import CardInput from "../components/CardInput";
import ResultOverlay from "../components/ResultOverlay";



const BMICalc = () => {
  const [weight, setWeight] = useState<number | "">(65);
  const [age, setAge] = useState<number | "">(26);
  const [height, setHeight] = useState<number | "">(170);
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [bmi, setBmi] = useState<number | null>(null);
 


  const calculateBMI = () => {
    if (height === "" || weight === "") return;

    const heightInMeters = Number(height) / 100;
    const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(1)));
  };


  return (
    <section className="px-6 md:px-20">
      <div className="flex flex-col gap-4 justify-center items-center text-blue-950 font-semibold py-10">
        <h1 className="text-3xl font-bold">BMI Calculator</h1>
        <h3 className="text-lg">Choose your gender</h3>

        <div>
          <GenderCard gender={gender} setGender={setGender} />
        </div>

        <div className="flex gap-6 justify-center mt-10">
          <CardInput label="Weight (kg)" value={weight} onChange={setWeight} />
          <CardInput label="Age" value={age} onChange={setAge} />
        </div>

        {/* Height Input */}
        <div className="mt-6 w-full flex justify-center">
          <CardInput label="Height (cm)" value={height} onChange={setHeight} />
        </div>

        <button
          onClick={calculateBMI}
          className="bg-blue-900 text-white px-8 py-3 rounded-2xl text-lg font-semibold hover:bg-blue-950 transition mt-8"
        >
          Calculate BMI
        </button>

        <ResultOverlay />
      </div>
    </section>
  );
};

export default BMICalc;
