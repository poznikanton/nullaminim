const item = "data";
const type = "bar";
const role = "main";
const name = "chart";

const result = item + (type && type !== '*' ? '&&' + item + '.mark.marktype===\'' + type + '\'' : '') + (role ? '&&' + item + '.mark.role===\'' + role + '\'' : '') + (name ? '&&' + item + '.mark.name===\'' + name + '\'' : '');

console.log(result);
// Output: data&&data.mark.marktype==='bar'&&data.mark.role==='main'&&data.mark.name==='chart'
