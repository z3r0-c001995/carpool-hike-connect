import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function FindRide() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Find a Ride</h1>
      <p className="text-lg text-gray-600 mb-8">This is where users will search for available rides to hikes.</p>
       <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}