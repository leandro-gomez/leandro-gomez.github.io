import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ProfileCard from '@/components/ProfileCard.vue'

describe('ProfileCard.vue', () => {
  it('renders my name', () => {
    const myName = 'Leandro Gomez'
    const wrapper = shallowMount(ProfileCard, {})
    expect(wrapper.text()).to.include(myName)
  })
})
