
import { Mars, Venus } from "lucide-react";

type GenderProps = {
  gender: "male" | "female" | null;
  setGender: React.Dispatch<React.SetStateAction<"male" | "female" | null>>;
};
const GenderCard = ({ gender, setGender }: GenderProps) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => setGender("male")}
        className={`flex flex-col items-center p-4 rounded-2xl shadow-md w-40 transition-all ${
          gender === "male" ? "bg-blue-100" : "bg-blue-50"
        }`}
      >
        <Mars className="w-8 h-8 text-blue-600 mb-1" />
        <p className="text-lg font-medium text-blue-950">Male</p>
      </button>

      <button
        onClick={() => setGender("female")}
        className={`flex flex-col items-center p-4 rounded-2xl shadow-md w-40 transition-all ${
          gender === "female" ? "bg-pink-100" : "bg-pink-50"
        }`}
      >
        <Venus className="w-8 h-8 text-pink-600 mb-1" />
        <p className="text-lg font-medium text-pink-700">Female</p>
      </button>
    </div>
  );
};

export default GenderCard;
