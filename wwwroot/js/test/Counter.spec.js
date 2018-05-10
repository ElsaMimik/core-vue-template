import { expect } from 'chai'
import { shallow } from './../../../node_modules/@vue/test-utils'
import Counter from './../components/report/Counter.vue'

describe('Counter.vue', () => {
  it('increments count when button is clicked', () => {
    const wrapper = shallow(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).contains('1')
  })
})
