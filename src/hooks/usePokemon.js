import { reactive, readonly } from 'vue';
import { useFetch } from './useFetch';

export const getByType = url => {
  const [data, setData] = useFetch(url);

  return [data, setData];
};

export const getListByUrl = urlList => {
  const state = reactive({
    response: [],
    loading: false,
    error: null
  });

  const bulkLoad = async () => {
    try {
      state.loading = true;
      state.error = null;
      const promises = [];

      urlList.forEach(url => {
        promises.push(fetch(url).then(data => data.json()));
      });

      const response = await Promise.all(promises);

      state.response = response;
    } catch (error) {
      state.error = error;
      // eslint-disable-next-line
      console.log('Error', error);
    } finally {
      state.loading = false;
    }
  };

  return [readonly(state), bulkLoad];
};
