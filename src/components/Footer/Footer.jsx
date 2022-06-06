import React from 'react';

function Footer(){
  const [isModalOpen,toggle] =React.useState(false);
  function toggleModal() {
    toggle(!isModalOpen);
  }
  function Modal(){
    if(isModalOpen){return(
    <div className='fixed  top-20 md:h-4/5  bg-white place-self-center border-2 p-5'>
    QR Code
    <img className='w-48' src='https://www.lakhaipur.in/wp-content/uploads/2019/04/paytm-qr-code.jpg'></img>
    or<br></br> 
    IFSC Code:xxxx xxxx xxxxx xxxx
    <br></br>
    Acc no: xxxx xxxx xxxx xxxx
    <br></br>
    <button onClick={toggleModal} className="bg-red-500 hover:bg-red-700 text-white font-bold  p-1 rounded">close</button>
    </div>)}
      else { return(<div></div>)}
     }

    return(
        <div className='grid w-screen'>
        <footer class="text-center lg:text-left bg-red-100 text-red-500 mt-16">
     <div class="flex justify-center items-center lg:justify-between p-6 border-b border-red-300">
       <div class="mr-12 hidden lg:block">
         <span>Get connected with us on social networks:</span>
       </div>
       <div class="flex justify-center">
         <a href="https://www.facebook.com/lbwablinds" class="mr-6 text-red-600">
           <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
             class="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 320 512">
             <path fill="currentColor"
               d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
             </path>
           </svg>
         </a>
         <a href="#!" class="mr-6 text-red-600">
           <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
             class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
             <path fill="currentColor"
               d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
             </path>
           </svg>
         </a>
         <a href="#!" class="mr-6 text-red-600">
           <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
             class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
             <path fill="currentColor"
               d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
             </path>
           </svg>
         </a>
         <a href="https://www.youtube.com/channel/UCHsOQZMq4WJ7Cuq_FzQvTGQ" class="text-red-600">
         <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube"
             class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
             <path fill="currentColor" d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" ></path></svg>
                 </a>
       </div>
     </div>
     <div class="mx-6 py-10 text-center md:text-left border-b border-red-300">
       <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div class="">
           <h6 class="
               uppercase
               font-semibold
               mb-4
               flex
               items-center
               justify-center
               md:justify-start
             ">
            About Our Organization
           </h6>
           <p>
           Louis Braille welfare association is working to the blind people। Our association is organising different types of camps, competitions and functions for blinds
           </p>
         </div>
         <div class="">
           <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
             Useful links
           </h6>
           <p class="mb-4">
             <a href="/events" class="text-red-600">Events</a>
           </p>
           <p class="mb-4">
             <a href="/about" class="text-red-600">About us</a>
           </p>
           <p>
             <button onClick={toggleModal} class="text-red-600">Donate us</button>
           </p>
         </div>
         <div class="">
           <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
             Contact
           </h6>
          <a href='https://g.page/r/CRj_sTWpY8EAEA0'> <p class="flex items-center justify-center md:justify-start mb-4">
             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
               class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
               <path fill="currentColor"
                 d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
               </path>
             </svg>
             Jalandhar, PB 144001, IN
           </p></a>
           <p class="flex items-center justify-center md:justify-start mb-4">
             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
               class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512">
               <path fill="currentColor"
                 d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
               </path>
             </svg>
             info@lbwa.com
           </p>
           <p class="flex items-center justify-center md:justify-start mb-4">
             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
               class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512">
               <path fill="currentColor"
                 d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
               </path>
             </svg>
             +91 99888 38033 ,    +91 94173 29291 
           </p>
         </div>
       </div>
     </div>
     <hr className='bg-red-700'></hr>
      <div className='flex flex-col items-center justify-center'><a href="https://condacode.com/">Made by <span className='font-semibold'>CondaCode</span></a></div>
   </footer>
   <Modal />
       </div>);
}
export default Footer;