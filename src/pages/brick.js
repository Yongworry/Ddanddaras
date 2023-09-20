import React, { useRef, useState, useEffect }from 'react';
import '../css/brick.css';
import { Link } from 'react-router-dom';

const BrickPage = () => {
    const canvasRef = useRef(null);
    const [canvasTag, setCanvasTag] = useState([]);
    const context = canvasRef.current.getContext('2d');

    useEffect (() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.5;
        canvas.height = window.innerHeight;
        setCanvasTag(canvas);

        context.beginPath();
        context.arc(10, 10, 20, 0, Math.PI * 2);
        context.fillStyle = 'green';
        context.fill();
        context.closePath();
    }, []);

    console.log("canvasTag :", canvasTag) ;
	return (
        <div className="canvas wrap"> 
            <canvas ref={canvasRef}></canvas>
            <Link to="/">
                <h3>메인 페이지로 돌아가기</h3>
            </Link>
        </div>
	);
};

export default BrickPage;