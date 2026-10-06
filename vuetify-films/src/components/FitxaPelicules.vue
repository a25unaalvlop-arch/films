<script setup>
import { ref } from 'vue'
const props = defineProps({
    film: { type: Object, required: true },
    info: { type: Object, required: false }
})
</script>

<template>
    <v-card class="my-card" rounded="lg">
        <img class="poster" :src="film.Poster" alt="">
        <p>{{ film.Title }}</p>
        <p>{{ film.Year }}</p>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn @click="Info(film.imdbID)" v-bind="activatorProps" color="surface-variant" text="Més informació"
                    variant="flat"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card :title="film.Title">
                    <v-card-text>
                        {{ info.Plot }}
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text="Tancar" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

    </v-card>
</template>

<style>
.my-card {
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
}

.poster {
  width: 250px;
  border-radius: 10px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 500px;
}

.cercador {
  padding-top: 20px;
}

.button_cercar {
  width: 90px;
  height: 40px;
  background-color: rgb(200, 200, 200);
  color: black;
}
</style>