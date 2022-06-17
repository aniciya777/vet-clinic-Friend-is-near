const avatar_sizes = ['orig', '250'];
const diploma_sizes = ['orig', '400'];

export function getClinicManagement() {
  const data = [
    {
      id: 1,
      full_name: 'Ушакова Маргарита Андреевна',
      post: 'Руководитель клиники',
    },
    {
      id: 2,
      full_name: 'Остапчук Анастасия Витальевна',
      post: 'Главный врач',
    }
  ];

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
