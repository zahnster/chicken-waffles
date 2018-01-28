export default () => (
	<div className="container">
		<h1>Today.</h1>

		<div className="chicken-waffles">
			<img className="chicken" src="/static/chicken.png" alt="Chicken" width="300" />
			<img className="waffle" src="/static/waffle.png" alt="Waffle" width="300" />
		</div>

		<style jsx global>{`
			* { margin: 0; padding: 0; }

			body {
				font-family: "Comic Sans MS", sans-serif;
				display: flex;
				height: 100vh;
				align-items: center;
				justify-content: center;
				text-align: center;
			}

			h1 {
				font-size: 3rem;
				margin-bottom: 2rem;
			}

			.chicken {
				animation: spin linear 3s infinite;
				margin: 2rem;
			}

			.waffle {
				animation: spin-counter linear 6s infinite;
				margin: 2rem;
			}

			@keyframes spin {
 				from { transform:rotate(0deg); }
    			to   { transform:rotate(360deg); }
			}

			@keyframes spin-counter {
 				from { transform:rotate(360deg); }
    			to   { transform:rotate(0deg); }
			}
		`}</style>
	</div>
)