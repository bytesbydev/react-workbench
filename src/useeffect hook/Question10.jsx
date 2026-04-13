import React, { useEffect } from 'react'

const Question10 = () => {
    useEffect(() => {
        console.log("Mounted")
        return () => {
            console.log("Unmounted")
        }
    }, [])

    return (
        <>
            <style>{`
                .container {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    font-family: Arial, sans-serif;
                }

                .card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 30px 40px;
                    border-radius: 15px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    color: white;
                    transition: transform 0.3s ease;
                }

                .card:hover {
                    transform: scale(1.05);
                }

                h2 {
                    margin-bottom: 10px;
                    font-size: 24px;
                }

                p {
                    font-size: 14px;
                    opacity: 0.8;
                }
            `}</style>

            <div className="container">
                <div className="card">
                    <h2>Check Console</h2>
                    <p>Open DevTools to see lifecycle logs</p>
                </div>
            </div>
        </>
    )
}

export default Question10