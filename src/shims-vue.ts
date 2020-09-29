declare module '*.vue' {
  import { ComponentOptions } from "vue"
  const Componentoptions: ComponentOptions
  export default Componentoptions
}

declare module '*.md' {
  const str: string
  export default str
}

// TS 只能理解 .ts 文件，无法理解 .vue 文件
// 创建 shims-vue.ts 文件来告诉 ts 识别 vue 文件
