// const div2 = dom.create('<div>我是</div>');
// var c = dom.before(test, div2);
// console.log(c);
// const div3 = dom.create('<div> 一名学习前端的小白 </div>')
// var d = dom.append(test, div3)
// console.log(d);
// dom.wrap(test, div3);
// var test2 = dom.remove(div2);
// console.log(test2);
// var a = dom.empty(window.empty);
// console.log(a);
// const a2 = dom.attr(test, 'title1', 'Hi, I am Frank');
// console.log(a2);
// const title = dom.attr(test, 'title1')
// console.log(`title: ${title}`);
// console.log(title);
// var text1 = dom.html(test, '<p>你好，这是新的内容</p>')
// console.log(text1);
// var text2 = dom.html(test)
// console.log(text2);


dom.style(test, { border: '1px solid red', color: 'red' })
dom.style(test, 'border')
dom.style(test, 'border', '1px solid black')

const text7 = dom.find("#test")[0]
console.log(text7);
const div = dom.find('#test>.red')[0] //获取第一个标签h5的red元素；
console.log(div);
const divList = dom.find('.red') //获取所有red元素
console.log(divList)
dom.each(divList, (n) => console.log(n))