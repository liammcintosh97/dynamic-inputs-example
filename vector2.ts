export default class Vector2{
  x: number
  y: number

  constructor(x: number,y: number){
    this.x = x,
    this.y = y
  }

  /**
   * Calculates the magnitude of the pass Vector2
   * @param a 
   * @returns 
   */
  static maginitude(a: Vector2){
    const xP = a.x > 0 ?  a.x * a.x : 0
    const yP = a.y > 0 ?  a.y * a.y : 0

    return Math.sqrt(xP + yP)
  }

  /**
   * Returns a normalized Vector2 of a
   * 
   * @param {Vector2} a 
   * @returns {Vector2 | undefined}
   */
  static normalize(a: Vector2): Vector2 | undefined{
    const m = Vector2.maginitude(a)

    if(m > 0) return Vector2.divide(a,m)
    return
  }

  /**
   * Subtracts Vector2 b from Vector2 a
   * @param {Vector2} a 
   * @param {Vector2} b 
   * @returns {Vector2} 
   */
  static subtract(a: Vector2, b: Vector2): Vector2{
    const result = a
    result.x -= b.x
    result.y -= b.y

    return result
  }

  /**
   * Divides Vector2 a by x
   * @param {Vector2} a 
   * @param {number} x 
   * @returns {Vector2} 
   */
  static divide(a: Vector2, x: number): Vector2{
    const result = a
    result.x /= x
    result.y /= x

    return result
  }
}