//匹配帐号是否合法(字母开头，允许5-10字节，允许字母数字下划线)
export const username = /^[a-zA-Z][a-zA-Z0-9_]{4,9}$/;
// //帐号（字母开头，允许 5-16 字节，允许字母数字下划线）
// export const username = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$ /;
// //中文、英文、数字及下划线
// export const username = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
//至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符：
export const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
//正整数
export const positiveInteger = /^[0-9]*[1-9][0-9]*$/;
//负整数
export const negativeInteger = /^-[0-9]*[1-9][0-9]*$/;
//正浮点数
export const positiveFloat = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
//负浮点数
export const negativeFloat = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
//浮点数
export const floating = /^(-?\d+)(\.\d+)?$/;
//email地址
export const email = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
//url地址
export const url = /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
//年/月/日（年-月-日、年.月.日）
export const ymd = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
//匹配中文字符
export const zh = /[\u4e00-\u9fa5]/;
//匹配空白行的正则表达式
export const spaceLine = /\n\s*\r/
//匹配中国邮政编码
export const zhZipCode = /[1-9]\d{5}(?!\d)/;
//匹配身份证
export const idnumber = /\d{15}|\d{18}/;
//匹配国内电话号码
export const tel = /(\d{3}-|\d{4}-)?(\d{8}|\d{7})?/;
//匹配IP地址
export const ip = /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/;
//匹配首尾空白字符的正则表达式
export const trim = /^\s*|\s*$/;
//匹配HTML标记的正则表达式
export const html = /<("[^"]*"|'[^']*'|[^'">])*>/
//sql 语句
export const sql = /^(select|drop|delete|create|update|insert).*$/;
//提取信息中的网络链接
export const network = /(h|H)(r|R)(e|E)(f|F) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?/;
//提取信息中的图片链接
export const imgsrc = /(s|S)(r|R)(c|C) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?/;
//取信息中的中国手机号码
export const phone = /(86)*0*13\d{9}/;
//提取信息中的任何数字
export const number = /(-?\d*)(\.\d+)?/;
//电话区号
export const areacode = /^0\d{2,3}$/;
//腾讯 QQ 号
export const qq = /^[1-9]*[1-9][0-9]*$/;