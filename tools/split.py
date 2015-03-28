#!/usr/bin/python
import sys
import glob

#print 'Number of arguments:', len(sys.argv), 'arguments.'
#print 'Argument List:', str(sys.argv)

def splitter(path, delim):
    # main splitter
    file = open(path,"r+")
    files = file.read().split(delim)

    for i in range(0, len(files)):
        new_filename = path + str(i);

        if "." in path:
            new_filename = path.split(".")[0] + str(i) + "." + path.split(".")[1]

        new_file = open(new_filename, "w")
        new_file.seek(0)
        new_file.write(files[i].strip())
        new_file.truncate()
        new_file.close()

    file.close()

if len(sys.argv) > 0:
    # just want 1 argument for now
    argument_passed = sys.argv[1]
    splitter(argument_passed, sys.argv[2])
