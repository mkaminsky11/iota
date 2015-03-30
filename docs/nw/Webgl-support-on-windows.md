## Webgl-support-on-windows

On Windows with some hardware and driver, WebGL won't work until you copy `D3DCompiler_43.dll` and `d3dx9_43.dll` to node-webkit's directory, or install [DirectX 9 redistributable](http://www.microsoft.com/en-us/download/details.aspx?id=8109).

For license reasons we cannot ship those DLLs.