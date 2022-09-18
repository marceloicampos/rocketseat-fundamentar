function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}

module.exports = getFlagValue

// rode com: node .\newimport.js --name "Marcelo" --greeting "Boa Tarde, tudo bom !"
