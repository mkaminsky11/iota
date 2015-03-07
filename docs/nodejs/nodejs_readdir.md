## fs.readdir(path, callback)

## 

Asynchronous readdir(3). Reads the contents of a directory.
The callback gets two arguments `(err, files)` where `files` is an array of
the names of the files in the directory excluding `'.'` and `'..'`.