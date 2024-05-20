'use client'
import React, {Component} from "react";
import NavBar from "./components/navbar";
import styles from "./page.module.css"
import Chart from "chart.js/auto";
import { salesOverTime, beerRevenueBreakdown, monthlySalesByBeer } from "./chartdata";
import { Line, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js';

Chart.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
);

const navigation = {
    brand: { name: "Drafted", to: "/"},
    links: [
        { name: "Batch Control", to: "/batchcontrol", },
        { name: "Beer Listing", to: "/beerlisting", },
        { name: "News Posts", to: "/news", },
        { name: "Settings", to: "/settings", },
    ]
    
}

export default class Home extends Component {
    render() {
        const { brand, links } = navigation;

        return (
            <main className={styles.main}>
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                <NavBar brand={brand} links={links}/>

                <div className={styles.mainContent}>
                    <h2 className={styles.heading1}>Data Panel</h2>

                    <div className={styles.charts}>
                        <div className={styles.salesOverTime}>
                            <Line data={salesOverTime} options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Sales Over Time'
                                    }
                                },
                                scales: {
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Revenue (in thousands)'
                                        }
                                    }
                                }
                            }}></Line>
                        </div>

                        <div className={styles.beerRevenueBreakdown}>
                            <Pie data={beerRevenueBreakdown} options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Beer Revenue Breakdown'
                                    }
                                }
                            }}></Pie>
                        </div>

                    </div>

                </div>
            </main>
        );
    }
}
