export default{
  getState: state => payload => state[payload],
  getObjState: state => payload => state[payload.obj][payload.prop]
}