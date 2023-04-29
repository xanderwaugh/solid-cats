interface NavItemProps {
  label: string;
  href: string;
  subLabel?: string;
  children?: NavItemProps[];
}

interface CataasResponse {
  tags: string[];
  createdAt: string;
  updatedAt: string;
  validated: boolean;
  owner: string;
  file: string;
  mimetype: string;
  size: number;
  _id: string;
  url: string;
}

interface CatAPIResponse {
  breeds: string[];
  id: string;
  url: string;
  width: number;
  height: number;
}
