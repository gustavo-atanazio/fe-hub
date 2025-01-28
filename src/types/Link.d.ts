type Link = {
  route: string;
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
  text: string;
  mobileOnly?: boolean;
};

export default Link;