<template>
  <div class="home">
    <input type="search" v-model="searchTerm" @keyup="handleChange" />
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <img :src="getImagePath(movie.poster_path)" />
        <div class="description">
          <div>
            {{ movie.original_title }} {{ getYear(movie.release_date) }}
          </div>
          <div class="smallText">Imdb Rating: {{ movie.vote_average }}</div>
          <div class="smallText">{{ movie.overview }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      searchTerm: "",
      movies: [],
      genrese: this.getGenres(),
    };
  },
  methods: {
    handleChange: async function (evt: Event) {
      const reponse = await (
        await fetch(`http://localhost:31000/search?term=${this.searchTerm}`)
      ).json();
      this.movies = reponse.results;
    },
    getImagePath: (end: string) => `http://localhost:31000/image?image=${end}`,
    getGenres: async function () {
      const reponse = await (
        await fetch("http://localhost:31000/genres")
      ).json();
      return reponse;
    },
    getYear: (date: string) => `(${new Date(date).getFullYear()})`,
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  width: 50%;
  margin: 0 auto;
  padding-top: 2em;
}

ul li {
  display: flex;
  flex-direction: row;
  padding-top: 1em;
}
ul li img {
  width: 150px;
}

.description {
  padding: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
}

.description div {
  padding: 0.2em;
}

.smallText {
  font-weight: normal;
  font-size: small;
}
</style>

function getGenres(): any { throw new Error("Function not implemented."); }
function getGenres(): any { throw new Error("Function not implemented."); }
