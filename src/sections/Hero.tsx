import './Hero.scss'
import customFunc from '../functions/function'
import Button from '../components/ui/Button/Button'
import Link from '../components/ui/Link/Link'
import reactImg from '../assets/img/icons/react.svg'

const Hero: React.FC = () => {

	return (
		<section className="hero">
			<div className="container">
				<h1>Welcome to Vite/TSX <img src={reactImg} alt="" /></h1>
				<div className="hero-ui">
					<Button label="Click Me" onClick={customFunc} />
					<Link href="https://www.example.com" text="Visit Example" newTab />
				</div>
			</div>
		</section>
	)
}

export default Hero