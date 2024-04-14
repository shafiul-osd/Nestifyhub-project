import Aos from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "aos/dist/aos.css";

export default function About() {
    const mapCenter = [24.9828, 89.2978]; // Coordinates of the desired location
    useEffect(() => {
        Aos.init({
            offset: 300,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 200,
        });
    }, []);
    return (
        <div className="container mx-auto p-4 space-y-10">
            <Helmet>
                <title>NestifyHub || About Page</title>
            </Helmet>
            <div data-aos="fade-down" className="text-center my-10">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="mb-4 md:w-[60%] mx-auto">Welcome to NestifyHub, our real estate agency, where we strive to make your dream home a reality. Our team is dedicated to providing exceptional service and expertise to help you find the perfect residential property.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div data-aos="fade-left" className=" bg-[rgba(255,255,255,0.2)] border border-[rgba(0,0,0,0.3)] backdrop-blur-sm p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Our Mission</h2>
                    <p>At NestifyHub, our mission is to exceed your expectations by offering personalized attention, integrity, and professionalism throughout your home buying journey. We are committed to helping you find a place you'll love to call home.</p>
                </div>

                <div data-aos="fade-right" className=" bg-[rgba(255,255,255,0.2)] border border-[rgba(0,0,0,0.3)] backdrop-blur-sm p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Our Vision</h2>
                    <p>Our vision at NestifyHub is to be the leading real estate agency in the region, known for our unwavering dedication to client satisfaction and our ability to match individuals and families with homes that perfectly suit their needs and lifestyles.</p>
                </div>
            </div>

            <div className="mt-8 ">
                <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
                <div data-aos="fade-right" className="h-[50vh] rounded-2xl border border-[rgba(0,0,0,0.3)] overflow-hidden my-10">
                    <MapContainer center={mapCenter} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={mapCenter}>
                            <Popup>
                                Welcome to NestifyHub! <br /> That's Our Home ❤️
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}
