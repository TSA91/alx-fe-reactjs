// src/components/Counter.jsx
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            padding: '20px',
            margin: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            textAlign: 'center'
        }}>
            <p style={{
                fontSize: '24px',
                color: '#333',
                marginBottom: '20px'
            }}>Current Count: <span style={{ fontWeight: 'bold' }}>{count}</span></p>
            
            <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center'
            }}>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Increment
                </button>
                
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Decrement
                </button>
                
                <button 
                    onClick={() => setCount(0)}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;