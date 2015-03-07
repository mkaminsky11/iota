## decipher.setAutoPadding(auto\_padding=true)

## 

You can disable auto padding if the data has been encrypted without
standard block padding to prevent `decipher.final` from checking and
removing it. Can only work if the input data's length is a multiple of
the ciphers block size. You must call this before streaming data to
`decipher.update`.