import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'

async function main () {
  const args = minimist(process.argv.slice(2))
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENjM2VCYzlhRTIxMkFEMGQ0ZWEzMDI4NGMxM2Y1QTVjNTY5NUZCNjgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTU3NDc3MTE3NTIsIm5hbWUiOiJhbnRob255cnVzc2Fuby5jb20ifQ.UotWcqd72zF7_DiCPJCXP4f8DpCN7IgTOJ-txDfJ9bc'
  // const token = args.token

  if (!token) {
    return console.error('A token is needed. You can create one on https://web3.storage')
  }

  if (args._.length < 1) {
    return console.error('Please supply the path to a file or directory')
  }

  const storage = new Web3Storage({ token })
  const files = []

  for (const path of args._) {
    const pathFiles = await getFilesFromPath(path)
    files.push(...pathFiles)
  }

  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)
}

main()