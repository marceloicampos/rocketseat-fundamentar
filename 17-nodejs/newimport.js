const getFlagValue = require('./newexport.js')
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

// rode com: node .\newimport.js --name "Marcelo" --greeting "Boa Tarde, tudo bom !"
