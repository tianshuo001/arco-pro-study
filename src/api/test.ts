import axios from 'axios';

export function tableData(input: string, date: string) {
  return axios.get(
    `http://10.11.244.34:8080/test_env/pc/test/${input}/${date}`
  );
}

export function getString() {
  return axios.get('http://10.11.244.34:8080/test_env/pc/test');
}
