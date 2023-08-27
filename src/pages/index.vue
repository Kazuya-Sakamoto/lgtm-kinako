<script setup lang="ts">
import { reactive } from "vue";
import TheTemplate from "@/components/templates/albums/index.vue";
import { albumsQuery, albumQuery } from "../mock/albumsQuery";

type State = {
  albums: albumQuery[];
};

const initialState = (): State => ({
  albums: [],
});
const state = reactive<State>(initialState());
state.albums = albumsQuery();
</script>

<template>
  <div>
    <TheTemplate :albums="state.albums" />
  </div>
</template>

<style scoped lang="scss"></style>
