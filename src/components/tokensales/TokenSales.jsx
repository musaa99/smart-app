import React, { useState, useEffect, useRef } from "react";
import { CgArrowLongRight } from "react-icons/cg";
// import moment from "moment";
import "./TokenSales.css";



const TokenSales = () => {

    const [tokenData, setTokenData] = useState<{ id, icon, start_date, end_date, start_price, start_stage, ticker, title}[]>([]);
    const [tokenDatas, setTokenDatas] = useState("");
    const [checkDate, setCheckDate] = useState(false);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState(false);

    // useEffect
    // useEffect(() => {
    //     const getTokenData = async () => {
    //         const res = await getData("products", "presales");
    //         setTokenData(res?.data.data);
    //         setTokenDatas(res?.data.data.map((item: any) => item));
    //         const getTokenSalesDate = res?.data.data[0].end_date;
    //         localStorage.setItem("tokenSalesDate", getTokenSalesDate);
    //         setLoading(false);
    //     };
    //     getTokenData();
    // }, []);

    // Getting todays date in Calendar format
    const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    const mdate = new Date("6 june 2022");
    const dateString = `${mdate.getDate()} ${MONTHS[mdate.getMonth()]} ${mdate.getFullYear()}`;

    // The start function
    const startSales = (id, start_date, end_date) => {
        const dateone = new Date(start_date);
        const datetwo = new Date(end_date);
        const diffDate = Math.abs(datetwo - dateone);
        const diffDay = Math.ceil(diffDate / (1000 * 60 * 60 * 24));

        // -------------------------------------
        // Minus the end date from todays date
        const date1 = new Date(dateString);
        const date2 = new Date(end_date);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // diffDay = number of days for token sales
        // diffDays = number of days remaining

        // Get the date number from the end date
        let splitData = end_date.split("");
        let removedData;

        if (splitData[1] === "") {
            removedData = splitData.splice(0, 1);
        } else {
            removedData = splitData.splice(0, 2);
        }
        const generatedDate = parseInt(removedData.join(""));

        // Get the date from todays date
        const todayDate = mdate.getDate();

        // console.log(diffDay);
        // console.log(diffDays);

        // console.log(todayDate);
        // console.log(generatedDate);

        if (todayDate > generatedDate) {
            setTokenDatas(start_date);
            setDate(true);
            setCheckDate(true);
        } else if (diffDays == diffDay || diffDays < diffDay) {
            history.push("/registration/auth#");
            localStorage.setItem("whitelist_product_id", JSON.stringify(id));
        } else if (diffDays > diffDay) {
            setTokenDatas(start_date);
            setDate(true);
        } else {
            console.log("loaded");
        }
    };

    // Buy token function
    const buyToken = (id, start_date, end_date) => {
        // format the start date

        let start = start_date.split("");
        if (start[1] === "t") {
            start.splice(1, 2);
        } else {
            start.splice(2, 2);
        }
        const mainStart = start.join("").toUpperCase();

        // format the end date
        let end = end_date.split("");

        if (end[1] === "t") {
            end.splice(1, 2);
        } else {
            end.splice(2, 2);
        }
        const mainEnd = end.join("").toUpperCase();

        // start sales
        startSales(id, mainStart, mainEnd);
    };

    return (

        <>

            <div className="token-sales" id="tokensales">
                <h3>Buy Tokens</h3>
                <h1>Token Sales</h1>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="token-sales-box">
                        {tokenData?.map((item) => {
                            const { id, icon, title, start_price, start_stage, end_date, start_date } = item;

                            return (
                                <div key={id} data-aos="fade-out" data-aos-once="true">
                                    <div className="token-card-left">
                                        <div className="token-left">
                                            <h2>
                                                <b>{title}</b>
                                            </h2>
                                            <small>Public Sale Starts</small>
                                            <p>{start_date}</p>
                                            <small>Stage {start_stage} Price</small>
                                            <p>${start_price}</p>
                                            <button onClick={() => buyToken(id, start_date, end_date)}>
                                                Buy Tokens
                                                <CgArrowLongRight className="arrow" />
                                            </button>
                                        </div>
                                        <div className="token-right">
                                            <img src={icon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                

                <h4 data-aos="slide-up" data-aos-once="true">
                    Presale Bonus up to <span>50%</span>
                </h4>
               
            </div>
            {date && (
                <Modal setDatas={setDate}>
                    {checkDate ? (
                        <>
                            <div className="expired-modal">
                                <h1>Public  Sales Expired</h1>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="token-modal">
                                <h3>Public Sale iii has not started, but will start really soon!</h3>
                                <small>Check back in</small>
                            </div>
                            <Timing tokenDatas={tokenDatas} />
                        </>
                    )}
                </Modal>
            )}
        </>
    );
};

export default TokenSales;
