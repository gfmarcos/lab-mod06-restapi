import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.status,
  type: character.status,
  gender: character.gender,
  image: character.image

});

