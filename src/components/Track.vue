<template>
  <div class="col-md-3">
    <div class="content">
      <img :src="track.image[2]['#text']" class="img-track">
      
      <div class="title">
        <span class="text-title">{{ track.name }}</span>
      </div>
      
      <div class="artist">
        {{ track.artist.name }}
      </div>
      
      <div class="listen">
        <a :href="track.url" target="_blank"> Listen to the song here. </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trackx',
  props: [ 'track' ]
}
</script>

<style>
.content {
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
  margin: 20px;
  cursor: pointer
}

.title {
  font-weight: 700;
  background-color: rgb(65, 184, 131);
  padding: 10px;
}

.text-title {
  word-wrap: break-word;
  width: 25px!important;
}

.img-track {
  width: 100%;
}
</style>
