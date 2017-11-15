export const SELECT_IMAGE ='SELECT_IMAGE';

export function selectImage(image){
  return {
      type:SELECT_IMAGE,
      payload:image
    }
}
