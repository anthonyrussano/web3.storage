# web3.storage

```
docker build --target dev . -t python
docker run -it -v ${PWD}:/work python sh
```

## Description

This project allows you to upload files to IPFS.

## Usage

### API Key

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENjM2VCYzlhRTIxMkFEMGQ0ZWEzMDI4NGMxM2Y1QTVjNTY5NUZCNjgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTU3NDc3MTE3NTIsIm5hbWUiOiJhbnRob255cnVzc2Fuby5jb20ifQ.UotWcqd72zF7_DiCPJCXP4f8DpCN7IgTOJ-txDfJ9bc`

### Requirements

This example assumes you have nodejs installed.

If so, then install use the supplied package.json file to install the required packages.

`$ npm install`

### Run the script

To upload one or more files:

`$ node uploader.js --token=<API-KEY> ~/filename1 ~/filename2 ~/filenameN`

To upload an entire directory:

`$ node uploader.js --token=<API-KEY> ~/path/to/files/`

Example:

`$ node uploader.js --token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENjM2VCYzlhRTIxMkFEMGQ0ZWEzMDI4NGMxM2Y1QTVjNTY5NUZCNjgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTU3NDc3MTE3NTIsIm5hbWUiOiJhbnRob255cnVzc2Fuby5jb20ifQ.UotWcqd72zF7_DiCPJCXP4f8DpCN7IgTOJ-txDfJ9bc ~/Downloads`

This should provide the following output:

```
Uploading 14 files
Content added with CID: bafybeib4qg3zdzucazpux43mu4rikrstbqnoxaynidxu6kyq3ijancdcca
```

Alternate usage:

`npm run upload <file(s) or path...>`

### Accessing the files

We can use the CID along with the filename to access the file.

`http://<CID>.ipfs.dweb.link/<filename>`

Example:

http://bafybeib4qg3zdzucazpux43mu4rikrstbqnoxaynidxu6kyq3ijancdcca.ipfs.dweb.link/test1