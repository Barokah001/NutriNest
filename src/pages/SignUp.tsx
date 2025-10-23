import SignUpForm from "../components/SignUpForm";


const SignUp = () => {
 return (
   <div className="flex min-h-screen bg-white">
     {/* Left side - Form */}
     <div className="flex w-full flex-col justify-center px-8 py-12 sm:px-12 lg:w-1/2 lg:px-16">
       <div className="mx-auto w-full max-w-sm">
         <h1 className="text-4xl font-bold text-blue-950">Get Started Now</h1>
         <SignUpForm />
       </div>
     </div>

     {/* Right side - Image */}
     <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-blue-50">
       <img
         src="/images/monstera-leaf.png"
         alt="Monstera leaf decoration"
         className="h-full w-full object-cover"
       />
     </div>
   </div>
 );
}

export default SignUp