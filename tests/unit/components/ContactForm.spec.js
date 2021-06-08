import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'

describe('ContactForm.vue', () => {
  it('has a form with two inputs and one textarea', () => {
    const wrapper = shallowMount(ContactForm, {})
    var form = wrapper.get('form')
    expect(form.findAll('input')).to.have.lengthOf(2)
    expect(form.findAll('textarea')).to.have.lengthOf(1)
  })
})
