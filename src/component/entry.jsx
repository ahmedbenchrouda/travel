export default function Entry (Props){
   return(<article className="journal">
      <div className="img-place-container">
       <img src={Props.img.src} className="main-img" alt={Props.img.alt} />
       </div>
    <div className="entry-container">      
        <img src="/assets/marker.png" className="location-img" alt="" />
        <span  className="japan">{Props.country}</span>
        <a href={Props. googleMapsLink} className="google" >view here in google</a>
        <h2 className="city">{Props.title}</h2>
    <p className="date">{Props.text}</p>
   
  
<p className="describe-text">
 
</p>
    </div>
    
   
  
   </article>)
}