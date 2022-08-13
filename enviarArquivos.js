const arquivos = document.querySelector('#file')
const tbody = document.querySelector('#tableResult tbody')

function handleFiles() {
  const fileList = this.files
  const numFiles = fileList.length

  for (let i = 0; i < numFiles; i++) {
    let file = fileList[i]
    try {
      file.text().then(function (data) {
        let parser = new DOMParser(),
          xmlDoc = parser.parseFromString(data, 'text/xml')
        const totalProdutos = xmlDoc.querySelectorAll('[nItem]')
        const local = xmlDoc.getElementsByTagName('xNome')[0].textContent
        const bairro = xmlDoc.getElementsByTagName('xMun')[0].textContent
        const dia = xmlDoc.getElementsByTagName('dhEmi')[0].textContent

        for (let p = 0; i < totalProdutos.length; p++) {
          let produto = xmlDoc.getElementsByTagName('xProd')[p]
          let quantidade = xmlDoc.getElementsByTagName('qCom')[p]
          let valorUnitario = xmlDoc.getElementsByTagName('vUnCom')[p]
          let valorTotal = xmlDoc.getElementsByTagName('vProd')[p]

          const tr = document.createElement('tr')

          const dados = [
            dia.split('T')[0],
            local,
            bairro,
            produto.innerHTML,
            quantidade.innerHTML.replace('.', ','),
            valorUnitario.innerHTML.replace('.', ','),
            valorTotal.innerHTML.replace('.', ','),
          ]

          for (let i = 0; i < dados.length; i++) {
            let td = document.createElement('td')
            td.innerHTML = dados[i]
            tr.appendChild(td)
          }
          tbody.appendChild(tr)
        }
      })
    } catch (error) {
      console.log('catch error:', error)
    }
  }
}

arquivos.addEventListener('change', handleFiles, false)
