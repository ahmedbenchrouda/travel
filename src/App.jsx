import Header from './component/navbar'
import Entry from './component/entry'
import data from './data'



export default function App(){
  const DataElement = data.map((Element=>{
  return <Entry img= {Element.img}
  title={Element.title}
  country={Element.country}
   googleMapsLink={Element.googleMapsLink}
   dates ={Element.dates}
   text={Element.text}/>
}))
  return(
    <>
<Header/>
<main className='container-s'>
{DataElement}

</main>
</>
)
}
/*<Entry   img={{
            src: "https://scrimba.com/links/travel-journal-norway-image-url",
            alt: "Geirangerfjord"
        }}
        title= "Geirangerfjord"
        country="Norway"
          googleMapsLink= "https://maps.app.goo.gl/fhkJuBhmFDv47tiB7"
        dates= "01 Oct, 2021 - 18 Nov, 2021"
        text= "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
<Entry  img={{
            src: "assets/istockphoto-876560704-612x612.jpg",
            alt: "japan"
        }}
        title= "Mount Fuji"
        country="japan"
          googleMapsLink= "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        dates= "Dates: 12 Jan, 2021 - 24 Jan, 2021"
        text=" Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
  Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
  The mountain is particularly beautiful in winter and attracts climbers, hikers, and photographers from all over the world."  />*/
