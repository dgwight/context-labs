// tests/SanitizedHtml.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import SanitizedHtml from '../components/SanitizedHtml.vue'

describe('SanitizedHtml', () => {
  it('is renders normal html', () => {
    const wrapper = mount(SanitizedHtml, {
      props: {
        html: '<i>Italics</i>'
      }
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.find('i').text()).toContain("Italics")
  })
})
