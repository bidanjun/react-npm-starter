
## npm run test now could debug
add:
      "env": { "CI": "true" },
      "disableOptimisticBPs": true
click the test start button,and set a breakpoint,then:
show Debugger attached.
wait for a minute,will pause at the point

## docs from create-react-app
here,we have some trouble in source map and unit test
. [debug in vscode](https://facebook.github.io/create-react-app/docs/setting-up-your-editor#visual-studio-code)

. [debug test in vscode](https://facebook.github.io/create-react-app/docs/debugging-tests)
  notice change test scripts