<template>
  <div class="container">
    <div class="check">
      <a-row :gutter="16">
        <a-col :span="6">
          <a-date-picker
            v-model="data.queryParams.queryDate"
            style="width: 200px"
          />
        </a-col>

        <a-col :span="8">
          <a-input
            v-model="data.queryParams.inputValue"
            :style="{ width: '320px', marginLeft: '20px' }"
            placeholder="请输入查询值"
            allow-clear
          />
        </a-col>
        <a-col :span="8">
          <a-button
            :style="{ marginLeft: '50px', textAlign: 'right' }"
            type="primary"
            @click="queryButton"
            >查询</a-button
          >
        </a-col>
      </a-row>
    </div>
    <div class="graph"></div>
    <div class="table"></div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { getString, tableData } from '@/api/test';
  import * as repl from 'repl';

  const data = reactive({
    queryParams: {
      inputValue: '',
      queryDate: '2024-01-01',
    },
  });
  function queryButton() {
    tableData(data.queryParams.inputValue, data.queryParams.queryDate)
      .then((resp) => {
        console.log(resp);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
</script>

<style lang="less" scoped>
  .container {
    background-color: var(--color-fill-2);
    padding: 16px 20px;
    display: flex;
  }

  .check {
    width: 100%;
    padding: 20px 20px 20px 20px;
    background-color: var(--color-bg-2);
    border-radius: 4px 4px 0 0;
  }
</style>
