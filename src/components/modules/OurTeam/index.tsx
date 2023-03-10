import ItemsWrapper from '@/components/features/ItemsWrapper';
import TeamMemberItem from '@/components/features/TeamMemberItem';

import Tony from '@/assets/images/team/tony.jpg';
import Cristie from '@/assets/images/team/cristie.jpg';
import David from '@/assets/images/team/david.jpg';
import Melissa from '@/assets/images/team/melissa.jpg';

const OurTeam = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold">Our Team</h2>
          <p className="mb-5 max-w-xl py-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien.
          </p>
        </div>
        <ItemsWrapper>
          <TeamMemberItem name="Tony Neimer" companyRole="Designer" photoImgUrl={Tony} />
          <TeamMemberItem name="Cristie Harris" companyRole="Manager" photoImgUrl={Cristie} />
          <TeamMemberItem name="David Shellfer" companyRole="Seller" photoImgUrl={David} />
          <TeamMemberItem
            name="Melissa Certis"
            companyRole="President and CEO"
            photoImgUrl={Melissa}
          />
        </ItemsWrapper>
      </div>
    </section>
  );
};

export default OurTeam;
