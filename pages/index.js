import React from 'react'
import Layout from '../src/components/layout';
import {inject, observer} from 'mobx-react'
import {Button} from "@material-ui/core";
import About from '../src/features/about/about';
import Service from './services';
import Community from '../src/features/community/community';
import Contact from './contact';

const Home = () => (
	<Layout>
		<div className='landingPage'>
			<div className="center">
				<h1 className='title'>We help you to plan your wedding easily.</h1>
				<p>Perfect day & perfect time</p>
				<Button color={'primary'} variant="contained" >View More</Button>
			</div>
		</div>
		<About />
		<Service />
		<Community />
		<Contact />
		<style jsx>{`
      .landingPage {
        width: 100%;
        color: #333;
        background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/static/about-1.jpg');
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        color: white;
        position: relative;
        top: -100px;
        left: 0;
        z-index: -1;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 38px;
      }
      .center{
        margin: auto;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}</style>
	</Layout>
);
export default inject('store')(observer(Home));
