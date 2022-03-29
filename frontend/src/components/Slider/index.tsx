import { AnimatePresence } from 'framer-motion';
import ReactCarousel from 'react-material-ui-carousel';

interface ISlider {
    description: string;
    header: string;
    backgroundImg: string;
    youtubeUrl?: string;
}
const items: ISlider[] = [
    {
        description:
            'Our Smart Home Solution put Delan technologies on the map as a market leader in Home Automation industry.',
        header: 'Smart Homes',
        backgroundImg: '/img/hotels.jpg',
        youtubeUrl: 'https://www.youtube.com/embed/vV57OoQ8RW4',
    },
    {
        description:
            'Enjoy an immersive experience bringing movies to life and allowing you enjoy them as well as their directors intended.',
        header: 'Home Cinemas',
        backgroundImg: '/img/cinema.jpg',
        youtubeUrl: 'https://www.youtube.com/embed/vV57OoQ8RW4',
    },
    {
        description:
            'Our smart hotel solution includes hotel automation and hotel IP and video solutions. With room automations that include lighting, air conditioning, access control, room service and cleaning.',
        header: 'Smart Hotels',
        backgroundImg: '/img/office.jpg',
        youtubeUrl: undefined,
    },
]
export const Slider = () => {

    const sliders = items.map((item, ind) => (
        <div className=" rounded h-100 my-2" key={ind}>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5)), url(${item.backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
            }}
            >
                <div className="h-100 ">
                    <div
                        className=
                        'd-flex h-100 justify-content-between align-items-center text-light p-3 '>
                        <p className="">{item.description}</p>
                        <h1 className="">{item.header}</h1>
                    </div>
                </div>
            </div>
        </div >
    ));
    return (
        <div style={{
            height: '250px'
        }}>
            <ReactCarousel animation="slide" stopAutoPlayOnHover swipe >
                {sliders}
            </ReactCarousel>
        </div>)
}