# web3.storage

To run python from docker:

```
docker build --target dev . -t python
docker run -it -v ${PWD}:/work python sh
```

- `nodejs` should be installed.
- Install the web3 storage package using npm:
  - `sudo npm install -g @web3-storage/w3`

- `$ npm install`

To upload one or more files:

- `node uploader.js --token=${WEB3API}  ~/filename1 ~/filename2 ~/filenameN`

To upload an entire directory:

`$ node uploader.js --token=${WEB3API} ~/path/to/files/`

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