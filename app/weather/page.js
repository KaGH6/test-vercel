// app/weather/page.js
"use client";  // クライアントサイドコンポーネントのために "use client" を使用

import { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(""); // 都市名を入力するための state
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     // OpenWeatherMap API からデータを取得
    //     //axios.getでAPIリクエストを送る
    //     // axios：APIを持ってこれるライブラリ
    //     axios
    //         .get(
    //             "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=70124155248c2126777ff8716403bf66"
    //         )
    //         // 成功した場合（.then）
    //         .then((response) => {
    //             setWeather(response.data);
    //         })
    //         // エラーが発生した場合（.catch）
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);

    //fetchWeather：天気情報を取得するための関数
    const fetchWeather = (cityName) => {
        if (!cityName) {
            alert("都市名を入力してください");
            return;
        }

        // ローディング開始
        setLoading(true);

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=70124155248c2126777ff8716403bf66&units=metric` // `units=metric` で摂氏表示
            )

            // 成功した場合（.then）
            .then((response) => {
                setWeather(response.data);
            })

            // エラーが発生した場合（.catch）
            .catch((error) => {
                console.error(error);
                alert("天気情報を取得できませんでした");
            })

            // APIリクエストが終了した後にローディング状態を解除
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <main className="py-20">
            <h1 className="text-4xl font-bold text-center mb-10">お住まいの地域の天気</h1>

            <div className="text-lg weather pt-5">
                <input
                    type="text"
                    placeholder="都市名を入力"
                    value={city} //inputの値（都市名）をstate（city）で制御
                    onChange={(e) => setCity(e.target.value)} //入力された内容をstate（city）に反映
                    className="border p-2 mr-2"
                />
                <button
                    onClick={() => fetchWeather(city)} //ボタンがクリックされたときにfetchWeather(city) 関数が実行
                    className="bg-blue-500 text-white p-2 rounded"
                    disabled={loading} //ローディング中はボタンを無効化
                >
                    {loading ? "取得中..." : "天気情報を取得"
                        //ローディング中かどうかでボタンテキストを切り替え
                    }
                </button>
            </div>

            {/* weatherが存在すれば、取得した天気情報（weather.main.temp_max）を表示 */}
            {weather ? (
                <div className="weather-temp pt-10">
                    <p>最高気温: {weather.main.temp_max}°C</p>
                    <p className="mt-4">最低気温: {weather.main.temp_min}°C</p>
                    <p className="mt-4">湿度: {weather.main.humidity}%</p>
                    <p className="mt-4">天気: {weather.weather[0].description}</p>
                    <p className="mt-4">風速: {weather.wind.speed} m/s</p>
                </div>

            ) : (
                // weatherがまだ取得できていない場合は「Loading...」を表示
                <p className="text-center mt-5">Loading...</p>
            )}
        </main>
    );
}
