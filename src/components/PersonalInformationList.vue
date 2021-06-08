<template>
  <div class="col-6">
    <table class="table table-hover">
      <tbody>
        <tr v-for="info in personalInformation" :key="personalInformation.indexOf(info)">
          <td :style="info.style" class="text-center" scope="row"><i v-if="info.icon" :class="info.icon"></i>{{info.title}}</td>
          <td class="align-middle">
            <a class="text-info" v-if="info.href" :href="info.href" target="__blank">{{info.text}}</a>
            <span v-if="!info.href">{{info.text}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PersonalInformationList',
  props: ['personalInformation']
}
</script>
