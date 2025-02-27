import JwtService from './jwtService' // ✅ Ensure correct file name
import jwtDefaultConfig from './jwtDefaultConfig'

const useJwt = new JwtService(jwtDefaultConfig)

export default useJwt  // ✅ Export as an instance (NOT a function)
