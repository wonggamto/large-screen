import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';

const px = (n) => {
    return n / 2420 * (window as any).pageWidth;
};
export const Home = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: 12,
                color: '#79839E'
            },
            title: {show: false},
            legend: {show: false},
            xAxis: {
                data: ["1111", "2222", "3333", "4444", "5555", "6666"],
                axisTick: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    fontSize: px(12),
                    formatter(value) {
                        if (value.length > 2) {
                            const array = value.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return value;
                        }
                    }
                },
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    fontSize: px(12)
                }
            },
            grid: {
                x: px(50),
                y: px(50),
                x2: px(50),
                y2: px(50),
            },
            series: [{
                type: 'bar',
                data: [10, 15, 6, 8, 40, 20]
            }],

        });
    }, []);
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}/>
            <main>
                <section className="section1">
                    <div className="bordered 管辖统计">
                        <h2>案发派出所管辖统计</h2>
                        <div ref={divRef} className="chart"></div>
                    </div>
                </section>
                <section className="bordered section2"></section>
                <section className="bordered section3"></section>
                <section className="bordered section4"></section>
                <section className="bordered section5"></section>

            </main>
        </div>
    );
};
