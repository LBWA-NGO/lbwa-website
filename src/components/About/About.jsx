import React from 'react';


function About() {
  const [isModalOpen,toggle] =React.useState(false);
  function toggleModal() {
    toggle(!isModalOpen);
  }
  function Modal(){
    if(isModalOpen){return(
    <div className='fixed  top-20 md:h-4/5 bg-white place-self-center border-2 p-5'>
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
  return (
    <div className="grid">
  <div className="grid md:grid-cols-3 gap-1 p-10 md:p-24 md:px-32">
    <div className="col-span-2">
    <h1 className="text-red-500">About louis braille welfare association</h1>
    Louis Braille welfare association is working to the blind people। Our association is organising different types of camps, competitions and functions for blinds.
    Our Orgnization is Registered under Society Registration Act (XXI of 1860) and as ammended by Punjab ammendment act 1957
    <br></br>
    Registration no: STA/PUNJAL/107/2017-2018
    </div>
    <div className="grid md:grid-cols-12 ">
    <div className="bg-red-400 w-2 justify-self-end"></div>
    <div className="col-span-11">
   <div className='md:grid md:visible hidden'> <img className='w-48 h-48' src="https://scontent.fixc8-2.fna.fbcdn.net/v/t1.6435-9/166835294_493116208762012_8969540140414114917_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=303LBJcHaGgAX8syFQn&tn=eNXwMQQBRoQugxtf&_nc_ht=scontent.fixc8-2.fna&oh=00_AT_iHnWA4FaVYJ4mF3no1loZwR7FdtLB6vo4WA7yPVPQbg&oe=62AFD4B9"  />   
</div>
   <button onClick={toggleModal} className="bg-red-500 hover:bg-red-700 text-white font-bold m-2 p-2 rounded">Donate us</button>
    </div>
</div>
  </div>
<hr></hr>
<h1 className="text-red-500 place-self-center text-xl m-10">Our team</h1>
<div className="grid md:grid-cols-3 gap-32 px-10">
<div className="md:col-span-9 grid md:grid-cols-3 gap-20 p-10 md:p-auto">
<div className="grid place-content-center md:w-auto"><img className='rounded-full w-40 h-40' src="https://raw.githubusercontent.com/LBWA-NGO/lbwa-website/master/images/1.jpg"  /><div className="">- Vikrant datta<br></br>&nbsp;&nbsp;&nbsp;&nbsp;President</div></div>
<div className="grid place-content-center md:w-auto"><img className='rounded-full w-40 h-40' src="https://raw.githubusercontent.com/LBWA-NGO/lbwa-website/master/images/3.png"  /><div className="">-  ashwani Kumar<br></br>Vice President</div></div>
<div className="grid place-content-center md:w-auto"><img className='rounded-full w-40 h-40' src="https://raw.githubusercontent.com/LBWA-NGO/lbwa-website/master/images/4.png"  /><div className="">- Poonam kumari<br></br>&nbsp;&nbsp;&nbsp;&nbsp;chairman</div></div>
<div className="grid place-content-center md:w-auto"><img className='rounded-full w-40 h-40' src="https://raw.githubusercontent.com/LBWA-NGO/lbwa-website/master/images/6.jpeg"  /><div className="">- Avtar Singh<br></br>Cheif Advisor</div></div>
<div className="grid place-content-center md:w-auto"><img className='rounded-full w-40 h-40' src="https://raw.githubusercontent.com/LBWA-NGO/lbwa-website/master/images/2.jpg"  /><div className="">- inderpreet Singh<br></br>Generel secratory</div></div>
<div className="grid place-content-center md:w-auto"><img className='rounded-full w-40 h-40' src="https://raw.githubusercontent.com/LBWA-NGO/lbwa-website/master/images/5.jpeg"  /><div className="">- Tejinder Singh<br></br>&nbsp;&nbsp;&nbsp;&nbsp;Cashier</div></div></div>
</div>
  <Modal />
    </div>
  );
}
export default About;
