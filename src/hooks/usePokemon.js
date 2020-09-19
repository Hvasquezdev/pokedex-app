import { watch, reactive, readonly } from 'vue';
import { useFetch } from './useFetch';

export const getByType = url => {
  const [data, setData] = useFetch(url);
  const state = reactive({
    response: []
  });

  watch(
    () => data.response,
    newVal => {
      const { pokemon } = newVal;
      const urlList = pokemon.map(item => item.pokemon.url);

      getListByUrl(urlList, pokemonList => {
        state.response = pokemonList;
      });
    }
  );

  return [readonly(state), setData];
};

export const getListByUrl = async (urlList, cb) => {
  try {
    const promises = [];

    urlList.forEach(url => {
      promises.push(fetch(url).then(data => data.json()));
    });

    const response = await Promise.all(promises);

    cb(response);
  } catch (error) {
    // eslint-disable-next-line
    console.log('Error', error);
  }
};
