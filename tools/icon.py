import subprocess

'''
icon_16x16.png (= 16 x 16)
icon_16x16@2x.png (= 32 x 32)
icon_32x32.png (= 32 x 32)
icon_32x32@2x.png (= 64 x 64)
icon_128x128.png (= 128 x 128)
icon_128x128@2x.png (= 256 x 256)
icon_256x256.png (= 256 x 256)
icon_256x256@2x.png (= 512 x 512)
icon_512x512.png (= 512 x 512)
icon_512x512@2x.png (= 1024 x 1024)
'''

def run(cmd):
    subprocess.call(cmd.split())

#   size in filename , @2x
icons = [
    (16, False),
    (16, True),
    (32, False),
    (32, True),
    (128, False),
    (128, True),
    (256, False),
    (256, True),
    (512, False),
    (512, True)
]

#first, cleanup
run("rm -rf iconbuilder.iconset/*")

#then, copy them
for i in range(0, len(icons)):
    dim = icons[i][0]
    two = icons[i][1]
    real_dim = icons[i][0]
    suffix = ""
    if two:
        real_dim *= 2
        suffix = "@2x"

    filename = "icon_" + str(dim) + "x" + str(dim) + suffix + ".png"
    run("cp icon.png iconbuilder.iconset/" + filename)
    run("sips -Z " + str(real_dim) + " " + "iconbuilder.iconset/" + filename)

run("iconutil -c icns iconbuilder.iconset")
