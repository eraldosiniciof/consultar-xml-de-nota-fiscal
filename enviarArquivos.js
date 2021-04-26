const arquivos = document.querySelector('#file')
const tbody = document.querySelector('#tableResult tbody')

function handleFiles() {
    const fileList = this.files
    const numFiles = fileList.length

    for (let i = 0; i < numFiles; i++) {
        let file = fileList[i]
        try {
            file.text()
                .then(
                    function (data) {
                        let parser = new DOMParser(),
                            xmlDoc = parser.parseFromString(data, 'text/xml')
                        let dest = xmlDoc.getElementsByTagName('xNome')[1]
                        let uf = xmlDoc.getElementsByTagName('UF')[1]
                        let peso = xmlDoc.getElementsByTagName('pesoB')[0]
                        let qtde = xmlDoc.getElementsByTagName('qVol')[0]
                        let valor = xmlDoc.getElementsByTagName('vNF')[0]
                        let nf = xmlDoc.getElementsByTagName('nNF')[0]

                        const dados = [dest.innerHTML, nf.innerHTML, uf.innerHTML, peso.innerHTML.replace('.', ','), qtde.innerHTML, valor.innerHTML.replace('.', ',')]
                        let tr = document.createElement('tr')
                        for (let i = 0; i < dados.length; i++) {
                            let td = document.createElement('td')
                            td.innerHTML = dados[i]
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                    })
        } catch (error) {
            console.log('catch error:', error)
        }
    }
}

arquivos.addEventListener('change', handleFiles, false)