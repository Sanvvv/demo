const dataSource = [{
  id: 86960001,
  name: '文档翻译',
  works: {
    type: 'translation',
    count: 82
  },
  type: '门户-文档类翻译'
}, {
  id: 86960002,
  name: '文档翻译',
  works: {
    type: 'translation',
    count: 82
  },
  type: '门户-文档类翻译'
}, {
  id: 86960003,
  name: 'test-tm04-本地化翻译',
  works: {
    type: 'translation',
    count: 82
  },
  type: '门户-文档类翻译'
}, {
  id: 86960004,
  name: 'test-tm04-本地化翻译',
  works: {
    type: 'translation',
    count: 4
  },
  type: '在线翻译'
}, {
  id: 86960005,
  name: 'test-tm04-本地化翻译',
  works: {
    type: 'translation',
    count: 21
  },
  type: '在线翻译'
}, {
  id: 86960006,
  name: 'test-tm04-本地化翻译',
  works: {
    type: 'tagging',
    count: 36
  },
  type: '在线翻译'
}, {
  id: 86960007,
  name: '自动分配生产类型',
  works: {
    type: 'translation',
    count: 160
  },
  type: '在线翻译'
}, {
  id: 86960008,
  name: '自动分配生产类型',
  works: {
    type: 'translation',
    count: 134
  },
  type: 'ICMS在线翻译'
}, {
  id: 86960009,
  name: 'JDBC',
  works: {
    type: 'translation',
    count: 82
  },
  type: 'ICMS在线翻译'
}, {
  id: 86960010,
  name: 'iovcc_76080_seo_1203_219.json',
  works: {
    type: 'translation',
    count: 82
  },
  type: 'ICMS在线翻译'
}]

for (let i = 86960011; i < 86960100; i++) {
  dataSource.push({
    id: i,
    name: '文档翻译',
    works: {
      type: 'translation',
      count: 82
    },
    type: '门户-文档类翻译'
  })
}

const columns = [{
  title: '项目ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '项目名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '工作量',
  dataIndex: 'workload',
  key: 'workload',
}, {
  title: '需求类型',
  dataIndex: 'type',
  key: 'type',
}]

const filterData = {
  supplier: [
    { value: 'supplier1', text: '供应商1' },
    { value: 'supplier2', text: '供应商2' },
    { value: 'supplier3', text: '供应商3' }
  ],
  genType: [
    { value: 'genType1', text: '生产类型1' },
    { value: 'genType2', text: '生产类型2' },
    { value: 'genType3', text: '生产类型3' }
  ],
  srcLan: [
    { value: 'srcLan1', text: '源语言1' },
    { value: 'srcLan2', text: '源语言2' },
    { value: 'srcLan3', text: '源语言3' }
  ],
  tarLan: [
    { value: 'tarLan1', text: '目标语言1' },
    { value: 'tarLan2', text: '目标语言2' },
    { value: 'tarLan3', text: '目标语言3' }
  ]
}

export { dataSource, columns, filterData }
