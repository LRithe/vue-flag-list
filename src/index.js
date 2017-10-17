/**
 * Created by lin on 2017/10/11.
 */

import flagComponent from './Vue-Flag-List.vue'

const VueFlagList = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('VueFlagList', flagComponent)
  }
}

export default VueFlagList
