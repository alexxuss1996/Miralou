import { Button } from '@/components/shared/Button';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  // Todo: styling
  return (
    <div className="flex  gap-x-16">
      <div className="flex flex-col items-center">
        <h2>Your shopping cart is empty</h2>
        <p>Add some products to it now.</p>
        <Link to={'/shop'}>
          <Button className="border border-[transparent] bg-accent px-5 py-3 uppercase text-white transition-colors duration-300 ease-in hover:border-accent hover:bg-[transparent]">
            Back to shop
          </Button>
        </Link>
      </div>
      <div className="max-w-xl">
        <img src="https://images2.imgbox.com/03/4f/Ooafk64x_o.jpg" alt="empty cart" />
      </div>
    </div>
  );
};

export default EmptyCart;
