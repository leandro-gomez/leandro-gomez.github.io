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
    <Skills/>
    <div class="dropdown-divider"></div>
    <ContactForm/>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import PresentationCard from '@/components/PresentationCard.vue'
import PersonalInformation from '@/components/PersonalInformation.vue'
import Skills from '@/components/Skills.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Home',
  components: {
    ProfileCard,
    PresentationCard,
    PersonalInformation,
    Skills,
    ContactForm
  }
}
</script>
