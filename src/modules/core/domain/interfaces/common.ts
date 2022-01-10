export interface MenuId {
  secondCategory: string;
}

export interface Page {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: MenuId;
  pages: Page[];
}
