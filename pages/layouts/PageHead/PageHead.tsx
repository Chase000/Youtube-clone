import Head from 'next/head';



const PageHead: React.FC = () => {

	const metaList = [
		// { property: 'twitter:image:src', content: 'Youtube' },
	];

	return (
		<Head>
			<title>Youtube-home</title>
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			{/* {metaList.map(m => (
				<meta
					name={m.name}
					property={m.property}
					content={m.content}
					key={m.name ?? m.property}
				/>
			))} */}
		</Head>
	);
};

export default PageHead;
