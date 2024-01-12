<template>
  <div class="layout-demo">
    <a-layout style="height: 800px">
      <a-layout-header style="height: 200px">
        <a-space>
          <a-input
            :style="{ width: '320px' }"
            placeholder="请输入......"
            allow-clear
          />
          <a-button type="primary" @click="clickButton">查询</a-button>
        </a-space>
      </a-layout-header>
      <a-layout-content>
        <a-table :columns="columns" :data="data" />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
  import { getString, tableData } from '@/api/test';
  import { ref } from 'vue';

  let serverData: any[];

  const columns = [
    {
      title: '后台的数据',
      dataIndex: 'data1',
    },
  ];

  const data = ref();
  function clickButton() {
    getString()
      .then((resp) => {
        serverData = resp.data;
        data.value = resp.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(data);
  }
</script>

<style scoped>

</style>
