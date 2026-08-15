const LIGHT_LOGO =
  'https://media.base44.com/images/public/6a7f217dc1ce7582bf8d14c5/77938d6a0_BlindspotLogoTransparentLight.PNG';
const DARK_LOGO =
  'https://media.base44.com/images/public/6a7f217dc1ce7582bf8d14c5/0710ea0c8_BlindspotLogoTransparentDark.PNG';

export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img src={LIGHT_LOGO} alt="Blindspot" className="h-full w-auto dark:hidden" />
      <img src={DARK_LOGO} alt="Blindspot" className="hidden h-full w-auto dark:block" />
    </span>
  );
}