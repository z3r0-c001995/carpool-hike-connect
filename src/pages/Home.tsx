import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const hikes = [
  {
    title: 'Forest Expedition',
    location: 'Lush Green Forest',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d58df7dc-7475-4ad8-a6cf-bfd3ae9f4856/hike-1-6oki45p-1761695436645.webp',
  },
  {
    title: 'Sunset Peak',
    location: 'Cape Town Summit',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d58df7dc-7475-4ad8-a6cf-bfd3ae9f4856/hike-2-2x70fxp-1761695444691.webp',
  },
  {
    title: 'Waterfall Wonder',
    location: 'Ethiopian Highlands',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d58df7dc-7475-4ad8-a6cf-bfd3ae9f4856/hike-3-8dzhrr8-1761695451790.webp',
  },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] md:h-[80vh] text-white"
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/d58df7dc-7475-4ad8-a6cf-bfd3ae9f4856/hero-background-g6r5m0l-1761695427849.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Your Adventure Awaits
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl">
            Connect with drivers and fellow hikers. Share the ride, share the adventure.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
              <Link to="/find-ride">Find a Ride</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/offer-ride">Offer a Ride</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Hikes Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Upcoming Hikes</h2>
            <p className="text-lg text-gray-600 mt-2">Join fellow adventurers on these exciting trips.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hikes.map((hike, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="p-0">
                  <img src={hike.imageUrl} alt={hike.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-2">{hike.title}</CardTitle>
                  <p className="text-gray-600">{hike.location}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="text-green-600 hover:text-green-700 p-0 h-auto">
                    <Link to="/find-ride" className="flex items-center">View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link to="/find-ride">Explore More Hikes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}