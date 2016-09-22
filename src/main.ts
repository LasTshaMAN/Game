require('pixi.js');
require('p2');
require('phaser');

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import './styles.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
