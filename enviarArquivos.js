const arquivos = document.querySelector('#file')

function handleFiles() {
    const fileList = this.files
    const numFiles = fileList.length
    const result = document.querySelector('#resultado')

    for (let i = 0; i < numFiles; i++) {
        let file = fileList[i]

        file.text()
            .then(function (data) {
                let parser = new DOMParser(),
                    xmlDoc = parser.parseFromString(data, 'text/xml')
                let dest = xmlDoc.getElementsByTagName('xNome')[1]
                let uf = xmlDoc.getElementsByTagName('UF')[1]
                let peso = xmlDoc.getElementsByTagName('pesoB')[0]
                let qtde = xmlDoc.getElementsByTagName('qVol')[0]
                let valor = xmlDoc.getElementsByTagName('vNF')[0]

                result.innerHTML += `
                    ${dest.innerHTML} | 
                    ${uf.innerHTML} |
                    ${peso.innerHTML.replace('.', ',')} |
                    ${qtde.innerHTML} |
                    ${valor.innerHTML.replace('.', ',')}<br>
        `
            })
    }
}

arquivos.addEventListener('change', handleFiles, false)