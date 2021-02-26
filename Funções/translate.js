let Translate = (word, type) => {
    if (word !== undefined) {
    const bold1 = "<span class=\"bold\">"
    const bold2 = "</span>"
    const list = "<br>&bull; "
    const arrowlist = "<br>↳ "

    const colocarBold = (prop1) => {
        if (prop1.indexOf("**") !== -1) {
        while (prop1.indexOf("**") !== -1) {
            let string1 = prop1.replace(/\*\*/, bold1)
            prop1 = string1.replace(/\*\*/, bold2) 
        }}
        if (prop1.indexOf("*") !== -1) {
            while (prop1.indexOf("*") !== -1) {
                let string1 = prop1.replace(/\*/, bold1)
                prop1 = string1.replace(/\*/, bold2) 
            }}
        return prop1
    }

    const replaceAt = (input, index, replacement) => {
        return input.substr(0, index) + replacement + input.substr(index + replacement.length);
    }

    const criarList = (prop) => {
        if ((prop.indexOf("- ") !== -1 && prop.indexOf("- ", prop.indexOf("- ")+1) === -1) ||
       (prop.indexOf("↳ ") !== -1 && prop.indexOf("↳ ", prop.indexOf("↳ ")+1) === -1)) {
            return colocarMaiuscula(tirarList(prop))
            } else {
                if (prop.indexOf("- ") !== -1) {
                    while (prop.indexOf("- ") !== -1) {
                        prop = replaceAt(prop, prop.indexOf("- ") + 2, prop.charAt(prop.indexOf("- ") + 2).toUpperCase())
                        prop = prop.replace(/- /, list)
                    }
                    prop = prop.replace(/<br>/, "")}
                if (prop.indexOf("↳ ") !== -1) {
                    let change = String(prop)
                    while (change.indexOf("↳ ") !== -1) {
                        change = replaceAt(change, change.indexOf("↳ ") + 2, change.charAt(change.indexOf("↳ ") + 2).toUpperCase())
                        change = change.replace(/↳ /, "- ")
                        prop = replaceAt(prop, prop.indexOf("↳ ") + 2, prop.charAt(prop.indexOf("↳ ") + 2).toUpperCase())
                        prop = prop.replace(/↳ /, "- ")
                    }
                    while (change.indexOf("- ") !== -1) {
                        change = replaceAt(change, change.indexOf("- ") + 2, change.charAt(change.indexOf("- ") + 2).toUpperCase())
                        change = change.replace(/- /, "xa")
                        prop = replaceAt(prop, prop.indexOf("- ") + 2, prop.charAt(prop.indexOf("- ") + 2).toUpperCase())
                        prop = prop.replace(/- /, arrowlist)
                    }
                    prop = prop.replace(/<br>/, "")}
            }
        return prop    
    }

    const tirarList = (prop) => {
        if (prop.indexOf("- ") !== -1) {
            while (prop.indexOf("- ") !== -1) {
                prop = prop.replace(/- /, "")
            }
            prop = prop.replace(/<br>/, "")}
            return prop 
    }

    const colocarMaiuscula = (prop) => {
        let string = String(prop)
        let newString = string.replace(/\b\w/, l => l.toUpperCase())
        return (newString)
    }

    const tirarBold = (prop) => {
        if (prop.indexOf("*") !== -1) {
            while (prop.indexOf("*") !== -1) {
                prop = prop.replace(/\*/, "")
            }}
            return prop
    }

    const tirarObs = (prop) => {
        if (prop.indexOf("obs") !== -1 || prop.indexOf("OBS") !== -1) {
        prop = prop.replace(/\bobs\b/gi, '')
        prop = prop.replace(/:/, '')
    }
        return prop
    }

    const colocarMath = (prop) => {
        if (prop.indexOf("$") !== -1) {
            while (prop.indexOf("$") !== -1) {
                let string1 = prop.replace(/\$/, "<InlineMath math={'")
                prop = string1.replace(/\$/, "'} />") 
            }}
            return prop
    }

    const tirarRs = (prop) => {
        if (prop.indexOf("R:") !== -1 || prop.indexOf("**R:**") !== -1) {
            prop = prop.replace(/\bR\b/gi, '')
            prop = prop.replace(/:/, '')
        }
            return prop
    }

    if (type === "r") {
        return criarList(colocarBold(tirarRs(word)))
    }
    if (type === "p") {
        return colocarBold(tirarList(colocarMaiuscula(colocarMath(tirarObs(word)))))
    }
    if (type === "d") {
        return tirarList(tirarBold(word.toUpperCase()))
    }
    if (type === "t") {
        return colocarMaiuscula(word.toLowerCase())
    }
} else return ""
}

export default Translate