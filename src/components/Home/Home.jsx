import React from 'react';
function Home(){
    const [isModalOpen,toggle] =React.useState(false);
  function toggleModal() {
    toggle(!isModalOpen);
  }
  function Modal(){
    if(isModalOpen){return(
    <div className='fixed  top-20 md:h-4/5  bg-white place-self-center border-2 p-5'>
    {/* QR Code */}
    <img className='w-48 hidden' src='https://www.lakhaipur.in/wp-content/uploads/2019/04/paytm-qr-code.jpg'></img>
    {/* or<br></br>  */}
    IFSC Code: PUNB 0351 200
    <br></br>
    Acc no: 3512 0001 0028 0820
    <br></br>
    <button onClick={toggleModal} className="bg-red-500 hover:bg-red-700 text-white font-bold  p-1 rounded">close</button>
    </div>)}
      else { return(<div></div>)}
     }
    return(<div className="grid">
    <div className="grid md:grid-cols-3 p-10 mt-16">
<div class="col-span-2">
<div className="grid grid-cols-12 md:mt-16">
    <div className="bg-red-400 w-2 justify-self-end"></div>
    <div className="col-span-11">
    "Access to communication in the widest sense is access to knowledge, and 
that is vitally important for us if we are not to go on being despised or 
patronized by condescending sighted people"
    </div>
</div>
<h1 className="relative md:left-16 left-10 md:text-xl my-5">- By Louis Braille</h1>
</div>
<div className="relative md:left-10 left-16"><img width="300" src="https://sightscotland.org.uk/sites/default/files/styles/square_1_3/public/2020-09/LouisBraille%202.jpg?itok=yLg13VE8"></img></div>
    </div>
    <div className="p-10">
<h1 className="text-red-500 text-2xl">What we Do ?</h1>
    </div>
<div className="grid md:grid-cols-4 gap-5 p-5 md:p-16">
    <div><img className='md:w-72 h-20 md:h-48' src="https://raw.githubusercontent.com/LBWA-NGO/lbwa-website/master/images/events/1.jpg"  /></div>
    <div><img className='md:w-72 w-40 h-20 md:h-48 ' src="https://raw.githubusercontent.com/LBWA-NGO/lbwa-website/master/images/events/DSC_0220.JPG"  /></div>
    <div className="col-span-2">
    <div className="grid md:grid-cols-12 ">
    <div className="bg-red-400 w-2 justify-self-end"></div>
    <div className="col-span-10 p-8 md:p-auto">
    <div>Louis Braille welfare association is working to the blind people। Our association is organising different types of camps, competitions and functions for blinds</div> 
   <br></br>
 <a href='/about' className="bg-red-500  hover:bg-red-700 text-white font-bold m-2 p-2 rounded">Read More</a>
    </div>
</div>
    </div>
</div>
    <div className="p-10">
<h1 className="text-red-500 text-2xl">Latest Events</h1>
    </div>
<div className="grid md:grid-cols-3 gap-3 p-5 md:p-10">
<div><iframe width="350" height="415" src="https://www.youtube.com/embed/xPkGoZsHadQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<div><iframe width="350" height="415" src="https://www.youtube.com/embed/zNIVKZWMVPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<div><iframe width="350" height="415" src="https://www.youtube.com/embed/2bJY0IXLayY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
    <div className="grid md:grid-cols-2 gap-2 p-10">
    <div className="grid grid-rows-2 gap-1">
        <div>
            <h1 className="text-red-600 text-2xl mb-2">Statetics</h1>
            <p className="text-xl">
            Our Organization reached a new level of height since its launch.
            we have covered numereous cities in punjab including jalandahr, ludhiyana etc.
            You can see statetics in our website.
            </p>
        </div>
        <div className="row-span-2 grid grid-cols-2 gap-4">
        <div><p className="text-red-500 text-2xl">7+</p>
            No of volunteers
            </div>
            <div><p className="text-red-500 text-2xl">8+</p>
            No of Cities Covered
            </div>
            <div><p className="text-red-500 text-2xl">2000+</p>
            No of pateint cured
            </div>
            <div><p className="text-red-500 text-2xl">10+</p>
            No of Camps organized
            </div>
        </div>
    </div>
        <div className="md:grid grid-rows-3 gap-1 px-16 hidden md:visible">
        <div ><div className="grid grid-cols-2"><div><img className="h-32" src="https://3.bp.blogspot.com/-EgXsfUZ4Z7c/VyroVO3dy6I/AAAAAAAAf2I/YnHn0ohLbLscq3FslfLsJkVMza0yYYFtQCLcB/s400/HELPING%2BHANDS.png"  /></div><div><img className="h-20" src="https://pngimg.com/uploads/red_arrow/red_arrow_PNG1.png"></img></div></div><hr></hr></div>
        <div ><div className="grid grid-cols-2"><div><img className="h-32" src="https://cdn2.iconfinder.com/data/icons/blind-man/307/blind-002-512.png"  /></div><div><img className="h-20" src="https://pngimg.com/uploads/red_arrow/red_arrow_PNG1.png"></img></div></div><hr></hr></div>      
        <div ><div className="grid grid-cols-2"><div><img className="h-32" src="https://pendletonpresbyterian.com/wp-content/uploads/2019/10/crop-43-43-1582-1582-0-donate-icon.png"  /></div><div><img className="h-20" src="https://pngimg.com/uploads/red_arrow/red_arrow_PNG1.png"></img></div></div><hr></hr></div>
        </div>
    </div>
    <div  class="grid  bg-[url('https://www.sightsavers.org/wp-content/uploads/2018/02/Sightsavers-Bangladesh-classroom-inclusive-education-1-1400x788.jpg')] p-16">
      <h1 className="text-red-50   text-3xl md:text-4xl place-self-center">Your small Contribution can become a ray of hope for a needy one</h1>
      <p className="text-red-200  md:text-xl">
      These blind people are starving daily without food and don’t even have sources of income to buy Grocery which can help them to sustain themselves for a few weeks. Since the pandemic, their income has gone down to zero.
      Your contribution can help thousands of people with blindness during the toughest times they’ve been going through. Every drop counts.
       </p>
      <button onClick={toggleModal} className="bg-red-400 hover:bg-red-700 place-self-center text-white font-bold m-2 p-2 rounded">Donate us</button>
</div>
<Modal/>
    </div>);
}
export default Home;