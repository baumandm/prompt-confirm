var Confirm = require('..');
var confirm = new Confirm({
  name: 'chocolate',
  message: 'Like chocolate?',
  default: false
});

confirm.run()
  .then(function(answer) {
    console.log(answer);
  })
