import { useRuntimeConfig } from "@/.nuxt/imports";
import { storeToRefs } from "pinia";
import { useLoginStore } from "@/store/login";
import { h } from "@/lib/headers";

type CreateNewAlbumParams = {
  title: string;
  imageUrl: string;
};

export const useCreateAlbum = () => {
  const config = useRuntimeConfig();
  const loginStore = useLoginStore();
  const { csrfToken } = storeToRefs(loginStore);

  const createNewAlbum = async ({ title, imageUrl }: CreateNewAlbumParams) => {
    const params = { image: imageUrl, title };
    const response = await fetch(`${config.public.API_URL}/album`, {
      method: "POST",
      headers: h(csrfToken.value),
      body: JSON.stringify(params),
      credentials: "include",
    });
    if (!response.ok) throw new Error("Failed to create album");
    return response.json();
  };

  return { createNewAlbum };
};
