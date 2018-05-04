const gulp = require('gulp')
const path = require('path')
const backstopjs = require('backstopjs')
const util = require('gulp-util')
const requireGlob = require('require-glob')
const taskConfig = require('../tests/backstop/config.js')

module.exports = test;

function test() {
    const { url, defaults } = taskConfig    
    const task = util.env.reference ? 'reference' : 'test'
    requireGlob(
        path.join(__dirname, '../components/', '*/*.config.js')
	).then(function (modules) {       
        const scenarios = []
        for (let key in modules) {
            let config = modules[key][`${key}Config`];
            const title = key
            const { selector = 'body', variants = [], status } = config

            if (status === 'test') {
                if (variants.length > 0) {
                    config = variants.map(({ name }) => {
                        return {
                            ...defaults,
                            selectors: [`${selector}`],
                            label: name,
                            url: `${url}${title}--${name}`
                        }
                    })
                    scenarios.push(...config)
                } else {
                    scenarios.push({
                        ...defaults,
                        selectors: [`${selector}`],
                        label: title,
                        url: `${url}${title}`
                    })
                }
            }
        }
        
        const conf = {
			...taskConfig.config,
			scenarios
        }
        
        backstopjs(task, {
            config: conf
        });
    })
    .catch(function(error){
        console.log('There\'s been an error: ', error);
    });
}   