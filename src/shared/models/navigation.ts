export interface NavItem {
  id: string;
  title: string;
  url: string;
  pathname?: string;
  slug: string;
  subItems: NavItem[];
}
