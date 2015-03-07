## smalloc.copyOnto(source, sourceStart, dest, destStart, copyLength);

## 

Copy memory from one external array allocation to another. No arguments are
optional, and any violation will throw.

    var a = smalloc.alloc(4);
    var b = smalloc.alloc(4);
    
    for (var i = 0; i < 4; i++) {
      a[i] = i;
      b[i] = i * 2;
    }
    
    // { '0': 0, '1': 1, '2': 2, '3': 3 }
    // { '0': 0, '1': 2, '2': 4, '3': 6 }
    
    smalloc.copyOnto(b, 2, a, 0, 2);
    
    // { '0': 4, '1': 6, '2': 2, '3': 3 }

`copyOnto` automatically detects the length of the allocation internally, so no
need to set any additional properties for this to work.