export default class Axis {
  constructor (el) {
    return this.axis(el)
  }
  axis (el) {
    const wall = document.querySelectorAll('.wall')
    const iron = document.querySelectorAll('.iron')
    const allWall = [
      ...wall,
      ...iron
    ]
    return new Promise((resolve, reject) => {
      for (let item of allWall) {
        if (this.casks(item, el)) {
          resolve(item)
        }
      }
      reject(el)
    })
  }
  /**
     * 碰撞检测。
     * @return {Boolean}
     */
  casks (obj1, obj2) {
    const L1 = obj1.offsetLeft
    const T1 = obj1.offsetTop
    const R1 = L1 + obj1.offsetWidth
    const B1 = T1 + obj1.offsetHeight

    const L2 = obj2.offsetLeft
    const T2 = obj2.offsetTop
    const R2 = L2 + obj2.offsetWidth
    const B2 = T2 + obj2.offsetHeight

    if (L1 >= R2 || T1 >= B2 || R1 <= L2 || B1 <= T2) {
      return false
    }
    return true
  }
}
