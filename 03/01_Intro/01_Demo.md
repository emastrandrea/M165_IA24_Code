# Anleitung: MongoDB Tools einrichten und Sample-Daten importieren

## Download-Links
- [MongoDB Tools Download](https://www.mongodb.com/try/download/database-tools)  
- [Repo Sample-MongoDB](https://github.com/huynhsamha/quick-mongo-atlas-datasets)

---

## Pfadvariable setzen (Bash)

```bash
cd
pwd
touch .bash_profile    # oder: cat .bash_profile
nano .bash_profile
````

### Im Nano-Editor

```bash
## SET PATH
export MongoDB='c/ProgramFiles/MongoDB/Server'
export PATH=$MongoDB/tools/bin:$MongoDB/mogosh/bin:$PATH
```

* Datei speichern (**CTRL + S**)
* Nano verlassen (**CTRL + X**)

---

## Import der Datenbank *sample_mflix*

Navigieren Sie zum Dump-Ordner aus dem geklonten Repository:

```bash
cd //Path_To_Clone_From_Repo
cd 03/sample-db/dump
```

## Datenbank wiederherstellen

```bash
mongorestore --db mflix ./sample_mflix
```

# Hinweise
--db mflix legt die Ziel-Datenbank fest.

Der Pfad ./sample_mflix bzw. .\sample_mflix verweist auf den Ordner mit den BSON-Dumps.
