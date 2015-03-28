## MenuItem.iconIsTemplate

_since v0.11.3_

Mac OS X Only. **Get** or **Set** whether `icon` image is treated as "template" (`true` by default). When the property is set to `true` the image is treated as "template" and the system automatically ensures proper styling according to the various states of the status item (e.g. dark menu, light menu, etc.). Template images should consist only of black and clear colours and can use the alpha channel in the image to adjust the opacity of black content. It has no effects on Linux and Windows.