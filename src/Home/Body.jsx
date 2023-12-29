import React from 'react';
import rehabi from './rehabi.png';
import  './Body.css';
import calender from './calendar_3.png';
import surgeon from './surgeon (1).png';
import surgeon1 from './surgeon.png';
import cardio   from './cardiology-1.webp';
import ent   from './ent-1.webp';
import gastro   from './gastroenterology-1.webp';
import gen   from './gen-medicine-1.webp';
import gensurgy   from './gen-surgery-1.webp';
import nutro   from './neurology.webp';
import obg  from './obg.webp';
import pediatrics  from './pediatrics.webp';
const Body = () => {
 

  return (
    <div>
    <div className='containers'>
     <div className='body'>
        <div className='text'>
            <h1>WELCOME TO INNOVATIVE  REHABILITATION </h1>
            <p>Don't let your injuries limit your <br></br>progress towards goals or prevent
               you from achieving them.</p>
        </div>
        <div className='img'> <img src={rehabi} height={"400px"} width={"400px"}></img> </div>
        
     </div>
    </div>
   <div className='appoint'>
    
    {/* <img src={calender} height={"40px"} width={"40px"} ></img>
    <h5 style={{display:'inline',paddingLeft:"20px"}}>Request An Appointment</h5> */}
    <h1 style={{paddingTop:"40px"}}> OUR DOCTORS</h1>
     <div className='cards'>
    <div class="card" style = {{width :"18rem"}}>
  <img class="card-img-top" src={surgeon} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">DOCTER</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

<div class="card" style = {{width :"18rem"}}>
  <img class="card-img-top" src={surgeon1} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">DOCTER</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

<div class="card" style = {{width :"18rem"}}>
  <img class="card-img-top" src={surgeon} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">DOCTER </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
</div>
<div className='know'>
<button type="button" class="btn btn-primary">Know More</button>
</div>      
   </div>

   <div className='specility'>
    
   <h1 style={{paddingTop:"40px"}}> OUR SPECIALITIES</h1>
   <div className='sp-card'>
   <div class="card" style = {{width :"16rem"}}>
  <img src={cardio} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">CARDIOLOGY</h5>
   
    </div>
  </div>

  <div class="card" style = {{width :"16rem"}}>
  <img src={ent} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">ENT</h5>
    
    </div>
  </div>

  <div class="card" style = {{width :"16rem"}}>
  <img src={gen} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">GENERAL MEDICINE</h5>
  
    </div>
  </div>

  <div class="card" style = {{width :"16rem"}}>
  <img src={gensurgy} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">GENERAL SURGERY</h5>
   
    </div>
  </div>  
</div>
<div className='sp-card-2'>
  <div class="card" style = {{width :"16rem"}}>
  <img src={gastro} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">GASTROENTEROLOGY</h5>
    
    </div>
  </div>
  <div class="card" style = {{width :"16rem"}}>
  <img src={pediatrics} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">PEDIATRICS</h5>
   
    </div>
  </div>
  <div class="card" style = {{width :"16rem"}}>
  <img src={obg} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">GYNAECOLOGY</h5>
   
    </div>
  </div>
  <div class="card" style = {{width :"16rem"}}>
  <img src={nutro} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">NEUROLOGY</h5>
    
    </div>
  </div>
  </div>

   </div>
    </div>
  );
};

export default Body;
