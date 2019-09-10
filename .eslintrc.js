module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  'rules': {
    'quotes': [
      'error',
      'single'
    ],//字符串必须使用单引号
    'indent': [2, 2],//缩进风格
    'eol-last': 2,//文件以单一的换行符结束
    'curly': [2, 'all'],//必须使用 if(){} 中的{}
    'camelcase': 2,//强制驼峰法命名
    'consistent-this': [2, 'that'],//this别名
    'no-unused-vars': [2],//不能有声明后未被使用的变量或参数
    'no-alert': 0,//禁止使用alert confirm
    'no-new': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'no-undef': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
