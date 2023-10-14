import { ref } from "vue";
import { useRuntimeConfig } from "@/.nuxt/imports";
export type Album = {
  image: string;
  id: number;
  title: string;
};

export const useAlbums = () => {
  const config = useRuntimeConfig();
  const albums = ref<Album[]>([]);
  const albumLoading = ref(false);

  const fetchAlbums = async () => {
    try {
      albumLoading.value = true;
      const response: Response = await fetch(
        `${config.public.API_URL}/album/random`
      );
      if (!response.ok) return;

      const data: Album[] = await response.json();
      albums.value = data;
    } catch (error) {
      console.error(error);
    } finally {
      albumLoading.value = false;
    }
  };

  const fetchAllAlbums = async () => {
    try {
      albumLoading.value = true;
      const response: Response = await fetch(`${config.public.API_URL}/album`);
      if (!response.ok) return;

      const data: Album[] = await response.json();
      albums.value = data;
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
    fetchAllAlbums,
  };
};
