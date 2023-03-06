import OverlayLink from '@/shared/OverlayLink';

import FacebookIcon from '@/assets/images/icons/feather/facebook.svg';
import TwitterIcon from '@/assets/images/icons/feather/twitter.svg';
import InstagramIcon from '@/assets/images/icons/feather/instagram.svg';

type Member = {
  name: string;
  companyRole: string;
  photoImgUrl: string;
};
const TeamMemberItem = ({ name, companyRole, photoImgUrl }: Member) => {
  return (
    <li className="flex flex-col flex-wrap items-center gap-3 text-sm">
      <span className="relative block max-h-[360px]">
        <img src={photoImgUrl} alt={name} />
        <span className="group/overlay bg-transition absolute inset-0 z-20 bg-opacity-0 hover:cursor-pointer hover:bg-black-alt/40">
          <span className="mx-6 flex h-full flex-col items-end justify-center gap-3 opacity-0 group-hover/overlay:opacity-100">
            <OverlayLink src={FacebookIcon} />
            <OverlayLink src={TwitterIcon} />
            <OverlayLink src={InstagramIcon} />
          </span>
        </span>
      </span>
      <h3 className="text-base font-semibold">{name}</h3>
      <p className="text-sm font-light">{companyRole}</p>
    </li>
  );
};

export default TeamMemberItem;
