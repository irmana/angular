
export default {
  entry: '../../../dist/packages-dist/platform-server/testing/index.js',
  dest: '../../../dist/packages-dist/platform-server/bundles/platform-server-testing.umd.js',
  format: 'umd',
  moduleName: 'ng.platformServer.testing',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/compiler': 'ng.compiler',
    '@angular/compiler/testing': 'ng.compiler.testing',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-server': 'ng.platformServer',
    '@angular/platform-browser-dynamic/testing': 'ng.platformBrowserDynamic.testing',
    'rxjs/Subject': 'Rx',
    'rxjs/observable/PromiseObservable': 'Rx', // this is wrong, but this stuff has changed in rxjs b.6 so we need to fix it when we update.
    'rxjs/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/Observable': 'Rx'
  }
}