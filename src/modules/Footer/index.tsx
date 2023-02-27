import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/shared/Button';
import Logo from '@/shared/Logo';
import SocialIcon from '@/shared/SocialIcon';
import ContactIcon from '@/shared/ContactIcon';

import InstagramIcon from '@/assets/images/icons/feather/instagram.svg';
import FacebookIcon from '@/assets/images/icons/feather/facebook.svg';
import YouTubeIcon from '@/assets/images/icons/feather/youtube.svg';
import TwitterIcon from '@/assets/images/icons/feather/twitter.svg';

import MapIcon from '@/assets/images/icons/feather/map-pin.svg';
import PhoneIcon from '@/assets/images/icons/feather/phone.svg';
import MailIcon from '@/assets/images/icons/feather/mail.svg';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <footer className="bg-black">
      <div className="container flex flex-col">
        {isHomePage && (
          <div className="flex flex-col justify-between border-b-2 border-white pt-16 pb-6 md:flex-row">
            <h2 className="mb-3 text-xl text-white md:mb-1 lg:text-2xl xl:text-3xl">
              Subscribe to receive 10% off your next purchase. <br /> Plus hear about our new
              arrivals and offers.
            </h2>
            <Button className="inline-block self-center bg-accent py-4 px-8 text-sm font-light uppercase text-white md:px-10">
              Contact Us
            </Button>
          </div>
        )}

        <div className="flex flex-row flex-wrap justify-between border-b border-white/40 py-10">
          <div className="flex h-48 flex-col justify-evenly md:w-6/12 lg:w-2/12 lg:justify-between">
            <Logo isWhite />
            <p className="mt-6 text-sm leading-5 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="mt-4 flex flex-row items-baseline text-white lg:justify-between">
              <li className="group/social-btn bg-transition mr-2 flex h-8 w-8 items-center justify-center rounded-full border  border-white/80 hover:bg-white/80">
                <a href="https://instagram.com" className="bg-transition">
                  <SocialIcon src={InstagramIcon} />
                </a>
              </li>
              <li className="group/social-btn bg-transition mr-2 flex h-8 w-8 items-center justify-center rounded-full border  border-white/80 hover:bg-white/80">
                <a href="https://twitter.com" className="bg-transition">
                  <SocialIcon src={TwitterIcon} />
                </a>
              </li>
              <li className="group/social-btn bg-transition mr-2 flex h-8 w-8 items-center justify-center rounded-full border  border-white/80 hover:bg-white/80">
                <a href="https://youtube.com" className="bg-transition">
                  <SocialIcon src={YouTubeIcon} />
                </a>
              </li>
              <li className="group/social-btn bg-transition mr-2 flex h-8 w-8 items-center justify-center rounded-full border  border-white/80 hover:bg-white/80">
                <a href="https://facebook.com" className="bg-transition">
                  <SocialIcon src={FacebookIcon} />
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4 flex flex-col">
            <h3 className="mb-8 text-2xl text-white">Information</h3>
            <ul>
              <li className="mb-5">
                <NavLink to={'/about'} className="font-light text-white/60">
                  About Miralou
                </NavLink>
              </li>
              <li className="mb-5">
                <a href="/" className="font-light text-white/60">
                  FAQ
                </a>
              </li>
              <li className="mb-0">
                <a href="/" className="font-light text-white/60">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4 flex flex-col">
            <h3 className="mb-8 text-2xl text-white">Quick Links</h3>
            <ul>
              <li className="mb-5">
                <a href="/" className="font-light text-white/60">
                  Wishlist
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="font-light text-white/60">
                  Checkout
                </a>
              </li>
              <li className="mb-0">
                <a href="/" className="font-light text-white/60">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          <div className="flex w-6/12 flex-col lg:w-4/12">
            <h3 className="mb-8 text-2xl text-white">Contact Us</h3>
            <ul>
              <li className="mb-5">
                <a href="/" className="font-light text-white/60">
                  <ContactIcon src={MapIcon} /> 2716 Dr. Arsh Sahn Jose, South Dakota, 35353
                </a>
              </li>
              <li className="mb-5">
                <a href="tel:+088874544466" className="font-light text-white/60">
                  <ContactIcon src={PhoneIcon} /> (0888) 7454-4466
                </a>
              </li>
              <li className="mb-0">
                <a href="mailto:miralou.seven@gmail.com" className="font-light text-white/60">
                  <ContactIcon src={MailIcon} /> miralou.seven@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between py-6">
          <p className="font-light text-white/90">Copyright &copy; 2022 Miralou</p>
          <p className="font-light text-white/90">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
