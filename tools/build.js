const path = require('path')
const cheerio = require("cheerio");
const fs = require('fs')

let result = []

const getInfo = (file) => {
  const blogStr = fs.readFileSync(process.cwd()+ '/' + file + '/index.html').toString()
  const $ = cheerio.load(blogStr)
  const blogInfo = {
    name: $('title').text(),
    time: $('time').text(),
    desc: $('.desc').text(),
  }
  result.push(blogInfo)
}

fs.readdir(process.cwd(), (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  const blogs = files.filter((str) => (/^20/).test(str)).sort().reverse()

  blogs.forEach( function (file) {
    getInfo(file)
  });

  const listStr = `var DATA = {
    list: ${JSON.stringify(result)}}`

  fs.writeFile('./static/js/blog-list.js', listStr , (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });

})