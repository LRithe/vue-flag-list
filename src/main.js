/**
 * Created by lin on 2017/10/11.
 */

import flagComponent from './Vue-Flag-List.vue'

const VueFlagList = {
  install: function (Vue) {
    Vue.component('flagCode', flagComponent)
  }
}

export default VueFlagList
