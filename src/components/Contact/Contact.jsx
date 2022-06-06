function Contact(){
  
         return(
        <div className="" >
    <div className="min-h-full flex items-center justify-center col-span-2 p-10">
        <div className="max-w-md w-full">
          <div>       
      
            <h2 className=" text-center text-3xl font-extrabold text-gray-900">Contact us</h2>
      
          </div>
          <form className="mt-5 " action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
              
              <label htmlFor="text" className="sr-only">
            Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Example @robert"
              />
            </div>
              <div>
              
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="text" className="sr-only">
                
                </label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  required
                  className="mt-5 w-full p-10"
                  placeholder="Note: this feature is currently Under Maintainace"
                />
              </div>
            </div>



            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
               Send
              </button>
            </div>
          </form>
        </div>
      </div>
    
      </div>
    );
}
export default Contact;