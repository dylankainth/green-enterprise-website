<template>
<div class="container">
  <div class="p-5 text-start bg-body-tertiary rounded-3">
    <h1 class="text-body-emphasis overflow-hidden">{{tutorial.title}}</h1>
    <p class="lead">
        {{tutorial.strapline}}
    </p>
  </div>

  <div class="p-5 text-start bg-body-tertiary rounded-3 mt-3">
    <div v-html="tutorial.videourl">
    
    </div>
  </div>
  


</div>
</template>

<script>
  export default {
    async asyncData({ params, store }) {
      const tutorialNumber = params.tutorial // When calling /abc the slug will be "abc"
      const tutorial = store.state.tutorials[tutorialNumber -1]
      return { tutorial, tutorialNumber }
    }
  }
</script>
