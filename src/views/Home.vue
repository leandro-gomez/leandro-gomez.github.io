<template>
  <div class="container">
    <div class="row mt-4">
      <ProfileCard/>
      <PresentationCard/>
    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import PresentationCard from '@/components/PresentationCard.vue'

export default {
  name: 'Home',
  components: {
    ProfileCard,
    PresentationCard
  }
}
</script>
