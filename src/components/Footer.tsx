import Button from "./Button";

const Footer = () => {
  return (
    <section className="bg-blue-950 text-white flex flex-col md:flex-row gap-10 items-start px-15 md:px-20 py-15">
      <div className="flex flex-col gap-3 justify-center items-start ">
        <div className="flex gap-1 justify-center items-center">
          <img src="/images/Logo..png" />
          <h1 className="text-2xl font-bold">NutriNest</h1>
        </div>

        <div className="bg-blue-100 text-blue-950 flex flex-col gap-2 font-semibold p-5 rounded-xl ">
          <h1>Let's Talk</h1>
          <a href="mailto:alimibarakat001@gmail.com">
            alimibarakat001@gmail.com
          </a>
          <a href="tel: +2349060010982">+2349060010982</a>
          <p>Lagos, Nigeria</p>
        </div>

        <Button name="Learn More" className="bg-white text-blue-950"/>
      </div>

      <div>
        <h1>Quick Links</h1>
      </div>
    </section>
  );
}

export default Footer