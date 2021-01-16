export interface CharacterApi {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  description: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
