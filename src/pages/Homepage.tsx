
import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#F6F7F4] h-screen flex flex-col justify-center items-center gap-5 px-15 md:px-20">
        <h1 className="md:w-1/2 text-center font-semibold text-5xl text-blue-950">
          Track your health, eat smart, live better.
        </h1>
        <h3 className="md:w-1/3 items-center justify-center text-center">
          Get AI-powered nutrition guidance tailored to your BMI, activity
          level, and lifestyle, because your health journey should be personal.
        </h3>
        <Button
          name="Start My Health Journey"
          className={
            "bg-white border-1 text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-[#ffffff]"
          }
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-15 px-15 md:px-20">
          <div className="bg-white h-[320px] w-[330px] p-10 rounded-2xl flex flex-col gap-2 text-start justify-center items-start">
            <h3 className="font-bold text-blue-900">Services</h3>
            <h1 className="text-2xl font-semibold text-gray-900">
              Analyze your BMI, track progress, and receive AI-curated meal
              plans that match your health goals.
            </h1>
          </div>

          <div className="relative bg-blue-100 h-[320px] w-[330px] p-10 rounded-2xl flex flex-col justify-start items-center">
            <div className="absolute right-5 ">
              <img src="/images/meal_rec.png" alt="" className="h-[140px]" />
            </div>
            <div className="absolute bottom-7 left-6 flex flex-col gap-3">
              <h3 className="font-bold text-blue-900">
                Personalized Meal Recommendation
              </h3>
              <h1 className="text-normal font-semibold text-gray-500">
                Analyze your BMI, track progress, and receive AI-curated meal
                plans that match your health goals.
              </h1>
            </div>
          </div>

          <div className="relative bg-red-100 h-[320px] w-[330px] p-10 rounded-2xl flex flex-col justify-start items-center">
            <div className="absolute right-5 ">
              <img src="/images/foodbot.png" alt="" />
            </div>
            <div className="absolute bottom-7 left-6 flex flex-col gap-3">
              <h3 className="font-bold text-blue-900">AI chatbox</h3>
              <h1 className="text-normal font-semibold text-gray-500">
                Analyze your BMI, track progress, and receive AI-curated meal
                plans that match your health goals.
              </h1>
            </div>
          </div>

          <div className="relative bg-green-100 h-[320px] w-[330px] p-10 rounded-2xl flex flex-col justify-start items-center">
            <div className="absolute right-5 ">
              <img
                src="/images/calcForm.png"
                alt=""
                className=" w-[140px] h-[150px]"
              />
            </div>
            <div className="absolute bottom-7 left-6 flex flex-col gap-3">
              <h3 className="font-bold text-blue-900">BMI calculator</h3>
              <h1 className="text-normal font-semibold text-gray-500">
                Analyze your BMI, track progress, and receive AI-curated meal
                plans that match your health goals.
              </h1>
            </div>
          </div>

          <div className="relative bg-pink-100 h-[320px] w-[330px] p-10 rounded-2xl flex flex-col justify-start items-center">
            <div className="absolute right-5 ">
              <img
                src="/images/dashboard.png"
                alt=""
                className=" w-[140px] h-[150px]"
              />
            </div>
            <div className="absolute bottom-7 left-6 flex flex-col gap-3">
              <h3 className="font-bold text-blue-900">Track Record</h3>
              <h1 className="text-normal font-semibold text-gray-500">
                Analyze your BMI, track progress, and receive AI-curated meal
                plans that match your health goals.
              </h1>
            </div>
          </div>

          <div className="relative bg-amber-100 h-[320px] w-[330px] p-10 rounded-2xl flex flex-col justify-start items-center">
            <div className="absolute right-5 ">
              <img
                src="/images/calcForm.png"
                alt=""
                className=" w-[140px] h-[150px]"
              />
            </div>
            <div className="absolute bottom-7 left-6 flex flex-col gap-3">
              <h3 className="font-bold text-blue-900">Services</h3>
              <h1 className="text-normal font-semibold text-gray-400">
                Analyze your BMI, track progress, and receive AI-curated meal
                plans that match your health goals.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-15 md:px-20 bg-blue-50 py-10 gap-8">
        <div className=" flex items-end gap-7">
          <img
            src="/images/nutritionistThree.jpg"
            alt=""
            className="rounded-xl w-1/2 h-[290px]"
          />
          <img
            src="/images/nutritionistTwo.jpg"
            alt=""
            className="rounded-xl w-1/2 h-[380px]"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-start ">
          <h3 className="text-blue-800 font-semibold text-normal">
            Who we are
          </h3>
          <h1 className="text-3xl text-blue-950 font-semibold">
            About NutriNest
          </h1>
          <p>
            NutriNest make healthy living simple and personal. From tracking
            your BMI to getting smart meal tips, we help you understand your
            body and make better food choices every day. Your wellness journey
            starts here, built around you.
          </p>

          <Button
            name="Learn More About Us"
            className={
              "bg-blue-800 text-white hover:bg-white hover:text-blue-800 border-1 border-blue-800"
            }
          />
        </div>
      </div>


      <Footer />
    </>
  );
}

export default Homepage