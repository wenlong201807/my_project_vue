// 用mockjs模拟生成数据
var Mock = require('mockjs')

module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    'recommendlist|10': [
      {
        'id|+1': 1,
        src: '../../../../static/icons/audio.png',
        title: '@ctitle(6)',
        content: '@ctitle(20)',
        price: '@natural(10,999)'
      }
    ],
    'weekendlist|10': [
      {
        'id|+1': 1,
        src: '../../../../static/icons/aa.png',
        title: '@ctitle(6)',
        content: '@ctitle(20)'
      }
    ]
  })
  // 返回的data会作为json-server的数据
  return data
}
