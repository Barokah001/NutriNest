
import Button from '../components/Button';
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#F6F7F4] max-h-screen">
        <h1 className="font-bold text-5xl text-[#1C1E26]">
          Track your health, eat smart, live better.
        </h1>

        <Button name="Check Your BMI Now" className={
            "bg-white border-1 text-[#1C1E26] border-[#1C1E26] hover:bg-[#1C1E26]"
          }/>
      </div>
    </>
  );
}

export default Homepage