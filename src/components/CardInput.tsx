
import { Minus, Plus } from "lucide-react";

type CardInputProps = {
  label: string;
  value: number | "";
  onChange: (value: number | "") => void;
  min?: number;
  max?: number;
  step?: number;
};

const CardInput = ({
  label,
  value,
  onChange,
  min = 0,
  max = 300,
  step = 1,
}: CardInputProps) => {
  const numeric = typeof value === "number" ? value : undefined;

  const increment = () => {
    if (numeric === undefined) {
      onChange(min);
      return;
    }
    const next = Math.min(numeric + step, max);
    onChange(next);
  };

  const decrement = () => {
    if (numeric === undefined) {
      onChange(min);
      return;
    }
    const next = Math.max(numeric - step, min);
    onChange(next);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "") {
      onChange("");
      return;
    }
    const parsed = parseFloat(newValue);
    if (!isNaN(parsed)) {
      const clamped = Math.min(Math.max(parsed, min), max);
      onChange(clamped);
    }
  };


  return (
      <div className="flex flex-col items-center bg-blue-50 p-4 rounded-2xl shadow-md w-40">
        <p className="text-blue-950 font-semibold text-normal mb-1">{label}</p>

        <input
          type="number"
          value={value}
          onChange={handleChange}
          className="text-4xl font-semibold text-blue-950 bg-transparent text-center w-full outline-none appearance-none"
          inputMode="decimal"
          pattern="[0-9]*"
        />

        <div className="flex gap-4 mt-2">
          <button
            onClick={decrement}
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-100"
          >
            <Minus className="w-4 h-4 text-blue-950" />
          </button>

          <button
            onClick={increment}
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-100"
          >
            <Plus className="w-4 h-4 text-blue-950" />
          </button>
        </div>
      </div>
  );
};

export default CardInput;
