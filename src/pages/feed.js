import React from 'react';
import { Link } from 'react-router-dom';

const FeedPage = () => {
	return (
		<>
			<h1>피드 페이지가 올 곳입니다.</h1>
			<Link to="/">
                <h3>메인 페이지로 돌아가기</h3>
            </Link>
		</>
	);
};

export default FeedPage;