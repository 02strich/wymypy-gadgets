import os
import zipfile

myZipFile = zipfile.ZipFile("wymypy.wdgt", "w" )
for root, dirs, files in os.walk("mac"):
    for filename in files:
        path = os.path.join(root, filename)
        myZipFile.write(path, os.path.relpath(path, "mac"))
