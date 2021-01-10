export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: 'Eeeeee',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
});
