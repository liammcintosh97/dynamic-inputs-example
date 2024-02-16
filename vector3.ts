export default class Vector3{
  x: number
  y: number
  z: number

  constructor(x: number,y: number,z: number){
    this.x = x,
    this.y = y
    this.z = z
  }

  /**
   * Calculates the magnitude of the pass Vector3
   * @param a 
   * @returns 
   */
  static maginitude(a: Vector3){
    const xP = a.x > 0 ?  a.x * a.x : 0
    const yP = a.y > 0 ?  a.y * a.y : 0
    const zP = a.z > 0 ?  a.z * a.z : 0

    return Math.sqrt(xP + yP + zP)
  }

  /**
   * Returns a normalized Vector3 of a
   * 
   * @param {Vector3} a 
   * @returns {Vector3 | undefined}
   */
  static normalize(a: Vector3): Vector3 | undefined{
    const m = Vector3.maginitude(a)

    if(m > 0) return Vector3.divide(a,m)
    return
  }

  /**
   * Subtracts Vector3 b from Vector3 a
   * @param {Vector3} a 
   * @param {Vector3} b 
   * @returns {Vector3} 
   */
  static subtract(a: Vector3, b: Vector3): Vector3{
    const result = a
    result.x -= b.x
    result.y -= b.y
    result.z -= b.z

    return result
  }

  /**
   * Divides Vector3 a by x
   * @param {Vector3} a 
   * @param {number} x 
   * @returns {Vector3} 
   */
  static divide(a: Vector3, x: number): Vector3{
    const result = a
    result.x /= x
    result.y /= x
    result.z -= x

    return result
  }
}