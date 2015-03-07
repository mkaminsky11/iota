## Event: 'resize'

## 

`function () {}`

Emitted by `refreshSize()` when either of the `columns` or `rows` properties
has changed.

    process.stdout.on('resize', function() {
      console.log('screen size has changed!');
      console.log(process.stdout.columns + 'x' + process.stdout.rows);
    });