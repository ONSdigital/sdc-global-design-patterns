import {subscribe} from './_sdcModules';
import CountdownAnimation from '../../../components/countdown/countdown';
import SessionTimeoutUI from '../../../components/timeout/timeout';
import LoaderBtn from '../loader-btn';
import dialog from '../dialog';
import fetch from '../fetch';
import {getTimeNow, matchMedia} from '../utils';
import domready from '../domready';
import Tabs from '../../../components/tabs/tabs';
import NavToggle from '../../../components/04-navigation/main-nav';
import timeoutDOM from '../../../components/timeout/timeout.dom';

/**
 * Import API
 */
import './extend';
import './boot';

subscribe('countdown', [{           method: CountdownAnimation,     methodName: 'CountdownAnimation' }]);
subscribe('dialog', [{              method: dialog,                 methodName: 'dialog' }]);
subscribe('domready', [{            method: domready,               methodName: 'domready' }]);
subscribe('fetch', [{               method: fetch,                  methodName: 'fetch' }]);
subscribe('loader-btn', [{          method: LoaderBtn,              methodName: 'LoaderBtn' }]);
subscribe('tabs', [{                method: Tabs,                   methodName: 'Tabs' }]);
subscribe('mobileNav', [{                method: NavToggle,                   methodName: 'NavToggle' }]);
subscribe('timeout', [{             method: SessionTimeoutUI,       methodName: 'SessionTimeoutUI' }]);
subscribe('timeout.dom', [{         method: timeoutDOM,             methodName: 'timeoutDOM', boot: true }]);

subscribe('utils', [              { method: getTimeNow,             methodName: 'getTimeNow' },
                                  { method: matchMedia,             methodName: 'matchMedia' }]);

/**
 * Should eventually be called by each application
 */
window.sdcAPI.boot();
