import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function fetchCountries(nameCountry) {
  return fetch(
    `https://restcountries.com/v3.1/name/${nameCountry}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(err => Notify.failure('Oops, there is no country with that name'));
}
