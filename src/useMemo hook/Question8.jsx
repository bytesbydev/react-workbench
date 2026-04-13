import React, { useMemo } from 'react'

const students = [
  { name: "Anshika", grade: 78 },
  { name: "Anubha", grade: 38 },
  { name: "Dev", grade: 98 },
  { name: "Aniket", grade: 38 },
  { name: "Daniel", grade: 68 },
  { name: "Anjali", grade: 98 },
  { name: "Rahul", grade: 38 },
  { name: "Kajal", grade: 58 },
  { name: "Ankit", grade: 38 }
]

const Question8 = () => {

  const result = useMemo(() => {
    return students
      .filter(item => item.grade > 50)
      .sort((a, b) => b.grade - a.grade)
  }, [])

  return (
    <>
      <style>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #43cea2, #185a9d);
          font-family: 'Segoe UI', sans-serif;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          width: 350px;
        }

        h2 {
          text-align: center;
          margin-bottom: 15px;
          color: #333;
        }

        .section {
          margin-bottom: 15px;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin: 5px 0;
          padding: 6px;
          border-radius: 6px;
          transition: 0.2s;
        }

        li:hover {
          background: #f0f5ff;
        }

        .passed {
          color: green;
          font-weight: bold;
        }

        .failed {
          color: red;
        }

        .topper {
          background: #e6fffa;
          border-left: 4px solid #00c897;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h2>🎓 Student Results</h2>

          <div className="section">
            <strong>All Students:</strong>
            <ul>
              {students.map((item, index) => (
                <li
                  key={index}
                  className={item.grade > 50 ? "passed" : "failed"}
                >
                  {item.name} - {item.grade}
                </li>
              ))}
            </ul>
          </div>

          <div className="section">
            <strong>Passed Students (Sorted):</strong>
            <ul>
              {result.map((item, index) => (
                <li
                  key={index}
                  className={item.grade >= 90 ? "topper" : ""}
                >
                  {item.name} - {item.grade}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Question8