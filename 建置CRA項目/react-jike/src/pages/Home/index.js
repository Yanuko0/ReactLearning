import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';





const Home = () => {
    const chartRef = useRef(null)
    useEffect(() => {
        // 1.獲取渲染圖表的dom節點
        // const chartDom = document.getElementById('main');
        const chartDom = chartRef.current
        // 2.圖表初始化生成圖表實例對象
        const myChart = echarts.init(chartDom);
        // 3.準備圖表參數
        const option = {
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
        <div>
            <div ref={chartRef} style={{width:"500px", height:"400px"}}></div>

        </div>)
}

export default Home