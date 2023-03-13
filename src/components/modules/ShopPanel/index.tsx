import PanelBody from '@/components/features/PanelBody';
import PanelHeader from '@/components/features/PanelHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { useState } from 'react';

const ShopPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading text="Shop" />
        <PanelHeader panelIsOpen={isOpen} togglePanel={togglePanel} />
        <PanelBody panelIsOpen={isOpen} />
      </div>
    </section>
  );
};

export default ShopPanel;
