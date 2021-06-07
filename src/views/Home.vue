<template>
  <div class="container">
    <div class="row mt-4">
      <ProfileCard/>
      <PresentationCard/>
    </div>
    <div class="row mt-4">
      <PersonalInformation/>
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import PresentationCard from '@/components/PresentationCard.vue'
import PersonalInformation from '@/components/PersonalInformation.vue'

export default {
  name: 'Home',
  components: {
    ProfileCard,
    PresentationCard,
    PersonalInformation
  }
}
</script>
