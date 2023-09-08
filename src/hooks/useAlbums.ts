import { ref } from "vue";
import { $fetch } from "ofetch";

type albums = {
  image: string;
  id: number;
  title: string;
};

export const useAlbums = () => {
  const config = useRuntimeConfig();
  const albums = ref<albums[]>([]);
  const albumLoading = ref(false);

  const fetchAlbums = async () => {
    try {
      albumLoading.value = true;
      const res = await $fetch<albums[]>(
        `${config.public.apiUrl}/album/random`,
        {
          method: "GET",
          // headers: conf.headers,
          // retry: 3
        }
      );
      console.log(res, "res");
      albums.value = res;
    } catch (error) {
      console.error(error);
    } finally {
      albumLoading.value = false;
    }
  };

  return {
    albums,
    albumLoading,
    fetchAlbums,
    refetch: fetchAlbums,
  };
};
