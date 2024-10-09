// using literal strings instead of numbers so that it's easier to inspect
// debugger events

export enum TrackOpTypes {
  GET = 'get',
  HAS = 'has',
  ITERATE = 'iterate',
}

export enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear',
}

export enum ReactiveFlags { // 字符串枚举
  SKIP = '__v_skip', // 跳过代理（不进行响应式处理）的标志
  IS_REACTIVE = '__v_isReactive', // 是否是reactive的标志
  IS_READONLY = '__v_isReadonly', // 是否是只读的标志
  IS_SHALLOW = '__v_isShallow', // 是否是浅层响应式的标志
  RAW = '__v_raw', // 获取对象原始值的标志，该标志存在则说明对象已被代理过
  IS_REF = '__v_isRef', // 是否是ref的标志
}
