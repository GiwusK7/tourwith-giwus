import Libassa from './images/Libassa.webp'
import nimbamount from './images/nimbamount.webp'
import robertsport from './images/robertsport.webp'
import monrovia from './images/monrovia.webp'
import Johngbedze from './images/Johngbedze.jpg'
import tropicana from './images/tropicana.jpg'


// nav links(separation of concern)

export const pageLinks = [
    {id: 1,href: '#home', text: 'home'},
    {id: 2,href: '#about', text: 'about'},
    {id: 3,href: '#services', text: 'services'},
    {id: 1,href: '#tours', text: 'tours'},
]

// social media links

export const socialLinks= [
    {id: 1,href: 'https://Wa.me/+231886262697', icon: 'fab fa-whatsapp', target: '_blank'},
    {id: 2,href: 'https://x.com/giwusliving?s=21', icon: 'fab fa-twitter', target: '_blank'},
    {id: 2,href: 'github.com/GiwusK7', icon: 'fab fa-github', target: '_blank'},
    {id: 3,href: 'https://www.linkedin.com/in/emmanuel-kromah-09b343311/', icon: 'fab fa-linkedin', target: '_blank'},
    {id: 4,href: 'https://www.instagram.com/giwusliving?', icon: 'fab fa-instagram', target: '_blank'}
]

// Services featured links
export const services = [
    {id: 1, icon: "fas fa-water fa-fw", title: "the kpatawee waterfalls", text: " Kpatawee Waterfall is in Bong County,in Liberia about 200km away from Monrovia, making it three hrs drive. It's close to Gbanga, and the turnoff to the waterfall is just before Cuttington University campus. And this is my home Town"},

    {id: 2, icon: "fas fa-tree fa-fw", title: "the kpatawee resort", text: " Whether you seek a breathtaking adventure or a peaceful retreat, Kpatawee resort will captivate your senses leaving matchless memories on your soul. Come and discover the wonders that await you at this hidden gem."},

    {id: 3, icon: "fas fa-hotel fa-fw", title: "hotel with restaurant& bar/lounge", text: "Whether you seek a breathtaking adventure or a peaceful retreat, Kpatawee resort will captivate your senses leaving matchless memories on your"}

    
];
// Services featured links
export const tours = [
    {id: 1, image: Libassa, date: "the weekends, 2024", title: "Libassa Ecolodge", info:"Libassa Ecolodge is a family owned business, which started from the dream to enjoy Liberia's wild and beautiful nature in an eco-friendly way. Your journey for a day, your home for a night, you will enjoy our forests, beach, lagoon, pools, our botanical gardens and our indigenous wildlife.", location:"Marshall, Margibi", duration:"3", cost:"500"},

    {id: 2, image: nimbamount, date: "the weekends, 2024", title: "Mount Nimba", info:"Mount Nimba is in Nimba County and is about a 4-5 hour drive from Monrovia, mostly on paved roads (from Monrovia to Ganta). Nimba Ecolodge and Reserve, located next to the beautiful Blue Lake, is the only option for accommodation and food services within East Nimba Nature Reserve.", location:" nimba county", duration:"3", cost:"550"},

    {id: 3, image: robertsport, date: "the weekends, 2024", title: "explore robertsport", info:" The historic cottonwood tree into which freed American slaves carved their names after landing on these shores from Norfolk in 1829 stands to this day on the beach providing shade to laid back campers, but it is the emerald bay beyond that's the star of the show.", location:"robertsport", duration:"3", cost:"600"},

    {id: 4, image: monrovia, date: "a week, 2024", title: "explore monrovia", info:" You'll see and feel the joy and excitement of freedom throughout the city, from historic mansions and freed slave settlements to antique stone churches still intact. You can visit the Centennial Pavilion, built in 1947, where Liberia inaugurates its Presidents. The grave site of William V.S. Tubman, Liberia's 18th and longest-serving president, is also here", location:"monrovia", duration:"7", cost:"750"},

    {id: 5, image: Johngbedze, date: "the weekends, 2024", title: "John Gbedze Beach resort", info:"John w. Gbedze Beach and Resort is located in Bens town, Marshall road. A 30-minute drive from the airport and 45 minute drive from central Monrovia. Want to have a pool party or a bachelorette party? Maybe you want to be away from the crowd and need a place to cool up. Coming to Liberia and need a place not too far from the airport? John w. Gbedze Beach and Resort is the right place for you.", location:"Bens Town,Marshall", duration:"3", cost:"550"},

    {id: 6, image: tropicana, date: "the weekends, 2024", title: "Tropicana Beach & resort", info:"Tropicana Beach and Resort is a by-the-beach resort that offers restful lodgings, scrumptious dining and impeccable guest services. Feel the warm breeze from the seaside of Liberia and come have an unforgettable West African vacation. Open swimming pool, swimming pool for children, live music, wonderful villas, everything at your service for an unforgettable holiday!", location:"Thinkers Village", duration:"3", cost:"550"},
]
