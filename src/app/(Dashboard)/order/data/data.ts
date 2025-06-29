export type User = {
  id: number;
  name: string;
  address: string;
  date:string;
  type:string;
  status:string;
};

export const users: User[] = [
  { id: 1, name: 'Shawon', address: 'Netrakona, Mymenshing, Bangladesh', date: '29 Jun 2025', type:'Electric', status: 'Completed' },
  { id: 2, name: 'Rafi', address: 'User',date: '29 Jun 2025', type:'Book',status: 'Proccessing' },
  { id: 3, name: 'Nayeem', address: 'Moderator',date: '29 Jun 2025', type:'Medicine',status: 'Rejected' },
];
