<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Kath Top Music</h1>
    <div class="container">
      <div class="row">
        <trackx v-for="track in tracks" v-bind:track="track" v-bind:key="track.artist.mbid"></trackx>
      </div>
    </div>
  </div>
</template>

<script>
import Trackx from './components/Track.vue';
import getTracks from './api';

export default {
  name: 'app',
  data () {
    return {
      tracks: []
    }
  },
  components: { 
    trackx: Trackx
  },
  mounted: function () {
    const _this = this;
    getTracks()
      .then(function (tracks) {    
        _this.tracks = tracks;
        console.log(_this.tracks)
      });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
