### Download-Links
* MongoDB Tools Download:
https://www.mongodb.com/try/download/database-tools
* Repo Sample-MongoDB:
https://github.com/huynhsamha/quick-mongo-atlas-datasets

### Set Path Variable (with Bash-Commands)
cd
pwd
touch .bash_profile (oder: cat .bash_profile)
nano .bash_profile

* In Nano-Editor
## SET PATH
export MongoDB='c/ProgramFiles/MongoDB/Server'
export PATH=$MongoDB/tools/bin:$MongoDB/mogosh/bin:$PATH

* Save and Exit

### Import sample_mflim from Code-Repo
cd //Path_To_Clone_From_Repo
cd 03/sample-db/dump
ls
mongorestore ....
