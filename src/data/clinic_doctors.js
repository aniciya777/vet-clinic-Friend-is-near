const avatar_sizes = ['orig', '250'];

import {doctors} from "@/seeders/doctors";

export function getClinicDoctors() {
  const data = doctors;

  data.forEach((element) => {
    element.avatar = {};
    avatar_sizes.forEach((size) => {
      element.avatar[size] = `./assets/images/doctors/${element.id}/avatar_${size}.png`;
    });
  })
  return data;
}
