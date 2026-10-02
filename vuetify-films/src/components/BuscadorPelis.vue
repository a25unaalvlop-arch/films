<script setup>

import { ref } from 'vue'
import { cercar } from '@/services/communicationManager'
import { mesInfo } from '@/services/communicationManager'

const cerca = ref('')
const resultats = ref([])
const info = ref([])

async function Buscar() {

  resultats.value = await cercar(cerca.value)

}

async function Info(imdbID) {
  info.value = await mesInfo(imdbID)
  document.getElementById(imdbID).style.display = 'block'

}

</script>

<template>

  <v-text-field v-model="cerca" label="Escriu la pel·licula"></v-text-field>
  <v-btn @click=Buscar>Cercar</v-btn>

  <v-row>

    <v-col v-for="film in resultats" cols="12" md="4">

      <v-card class="ma-3 pa-3">
        <img :src="film.Poster" alt="">
        <p>{{ film.Title }}</p>
        <p>{{ film.Year }}</p>
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn @click="Info(film.imdbID)" v-bind="activatorProps" color="surface-variant" text="Més informació" variant="flat"></v-btn>
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

    </v-col>

  </v-row>

</template>