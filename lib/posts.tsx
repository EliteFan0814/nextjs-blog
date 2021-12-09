import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// md文章路径
const postsDirectory = path.join(process.cwd(), 'posts')

// 获取文章列表内容
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/.md$/, '')
    //构建路径,读取文件内容
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data
    }
  })
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
// 获取文章id列表 （文件名）
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}
// 获取 文章内容
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContents)
  const processeContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processeContent.toString()
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
