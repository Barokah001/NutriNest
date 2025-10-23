import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-8 py-12 sm:px-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-sm">
          <h1 className="text-4xl font-bold text-blue-950">Welcome back!</h1>
          <p className="mt-2 text-gray-600">
            Enter your Credentials to access your account
          </p>
          <LoginForm />
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
  )
}

export default Login

