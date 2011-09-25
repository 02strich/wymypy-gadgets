import os
import zipfile

myZipFile = zipfile.ZipFile("wymypy.gadget", "w" )
for root, dirs, files in os.walk("windows"):
    for filename in files:
        path = os.path.join(root, filename)
        myZipFile.write(path, os.path.relpath(path, "windows"))