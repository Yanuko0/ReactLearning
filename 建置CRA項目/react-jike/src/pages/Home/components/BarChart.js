//柱狀圖組件
import * as echarts from 'echarts';
const { useRef, useEffect } = require("react");

// 1.把功能代碼放到這個組件中
// 2.把可變部分抽象成prop參數

const BarChart = ({title}) =>{
    const chartRef = useRef(null)
    useEffect(() => {
        // 1.獲取渲染圖表的dom節點
        // const chartDom = document.getElementById('main');
        const chartDom = chartRef.current
        // 2.圖表初始化生成圖表實例對象
        const myChart = echarts.init(chartDom);
        // 3.準備圖表參數
        const option = {
            title:{
                text:title
            },
            xAxis: {
                type: 'category',
                data: ['Vue','React','Angular']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [10,40,70],
                    type: 'bar'
                }
            ]
        };
        // 4.使用圖表參數完成圖表渲染
        option && myChart.setOption(option);

    }, [])

    return (
        
            <div ref={chartRef} style={{width:"500px", height:"400px"}}></div>

        )

}

export default BarChart