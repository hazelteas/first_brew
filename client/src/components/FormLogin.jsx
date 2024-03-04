export default function FormLogin() {

  return (
    <div className="max-w-md mx-auto space-y-4">
    <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-semibold mb-4 text-center text-indigo-600">Login</h1>
  
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input w-full px-4 py-2 rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Your Name"
        />
      </div>
  
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input w-full px-4 py-2 rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Your Email"
        />
      </div>
  
      <div className="mb-6">
        <label className="block text-sm text-gray-700 mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input w-full px-4 py-2 rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Your Password"
        />
      </div>
  
      <button
        className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md 
        hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500 w-full"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  </div>
  
  );
}
