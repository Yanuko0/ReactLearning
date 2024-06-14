

export default function PractiseJsx1() {
  const list = [
    {id:1001, name:"Vue"},
    {id:1002, name:"React"},
    {id:1003, name:"Angular"},
  ]
  return (
   
    <div>
      {/* 渲染列表 */}
      {/* map循環哪個結構 return結構 */}
      {/* 注意要加上獨一無二的key */}
      {/* key是react框架內部用於提升渲染更新性能的 */}
    <ul>
      {list.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
    </div>
  
  )
}
