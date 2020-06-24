import React, { useEffect, useState } from 'react';
import './HomeComponent.css';
import { getAnalyticsInfo } from '../services/analytics.service';

export const HomeComponent = () => {
    const [analyticsInfo, setAnalyticsInfo] = useState({temperature: 0, airPressure: 0, humidity: 0});

    useEffect(() => {
        const subscription = getAnalyticsInfo().subscribe(data => {
            setAnalyticsInfo(data);
        });

        return () => subscription.unsubscribe();
    })

    return (
        <div className="container">
            <div className="item temperature">
                <p className="title">Temperature</p>
                {analyticsInfo.temperature}
            </div>
            <div className="item air-pressure">
                <p className="title">Air Pressure</p>
                {analyticsInfo.airPressure}
            </div>
            <div className="item humidity">
                <p className="title">Humidity</p>
                {analyticsInfo.humidity}
            </div>
        </div>
    )
}
