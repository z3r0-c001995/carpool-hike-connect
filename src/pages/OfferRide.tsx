import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function OfferRide() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Offer a Ride</h1>
      <p className="text-lg text-gray-600 mb-8">This is where drivers will post their available seats for a hike.</p>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}