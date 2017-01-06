import DigiDocPlugin from './DigiDocPlugin'
import DigiDocExtension from './DigiDocExtension'
import DigiDocServlet from './DigiDocServlet'

const enabledBackends = [
    DigiDocServlet,
    DigiDocPlugin,
    DigiDocExtension
]

export { enabledBackends }
