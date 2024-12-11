export interface InfosCardProps {
  cardContent: string;
  bornAt?: string;
  email?: string;
  age?: string;
  phone1?: string;
}

export interface UserCardProps {
  username: string;
  address: string;
  perfilImage?: string;
  tryNextHandler: () => Promise<void>;
}

export interface randomUserProps {
  cell: string;
  dob: { date: string; age: number };
  email: string;
  gender: string;
  id: { name: string; value: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: number;
  };
  login: { uuid: string; username: string; password: string };
  nat: string;
  phone: string;
  picture: { large: string; medium: string; thumbnail: string };
  registered: { date: string; age: number };
  name: { title: string; first: string; last: string };
}
