interface Props extends React.SVGProps<SVGElement> {
  size?: number | string;
}

export type ProjectProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  icons: React.FunctionComponent<Props>[];
  tips: string[];
}