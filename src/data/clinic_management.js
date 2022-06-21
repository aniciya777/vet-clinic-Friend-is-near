const avatar_sizes = ['orig', '250'];
const diploma_sizes = ['orig', '400'];

import {management} from "@/seeders/management";

export function getClinicManagement() {
  const data = management;

  data.forEach((element) => {
    element.avatar = {};
    element.diploma = {};
    avatar_sizes.forEach((size) => {
      element.avatar[size] = `./assets/images/management/${element.id}/avatar_${size}.png`;
    });
    diploma_sizes.forEach((size) => {
      element.diploma[size] = `./assets/images/management/${element.id}/diploma_${size}.png`;
    });
  })
  return data;
}
