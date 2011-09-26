import os
import zipfile

myZipFile = zipfile.ZipFile("wymypy.wdgt.zip", "w" )
for root, dirs, files in os.walk("mac"):
    for filename in files:
        path = os.path.join(root, filename)
        myZipFile.write(path, os.path.join("wymypy.wdgt", os.path.relpath(path, "mac")))
