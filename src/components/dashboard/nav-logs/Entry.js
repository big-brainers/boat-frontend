import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const EntryDiv = styled.div`
	background: #fff;

	padding: 10px;
	width: 70vw;
	margin: 16px;

	& h1 {
		font-size: 1.1em;
		margin-bottom: 6px;
	}

	& p {
		font-size: 1.1em;
		margin-bottom: 10px;
		white-space: pre-wrap;
		word-wrap: break-all;
	}

	& button {
		position: relative;
		float: right;
		margin-right: 10px;
		background-color: #fff;
		color: #222f65;
		border: none;
		width: 36px;
		height: 36px;
		cursor: pointer;
		outline: none;
	}
`;

function Entry(props) {
	function handleClick() {
		props.onDelete(props.id);
	}
	return (
		<EntryDiv>
			{/* <h1>{props.title}</h1> */}
			<h1>Title</h1>
			<p>
				I'm baby salvia coloring book artisan, irony letterpress +1 aesthetic
				tacos flexitarian crucifix waistcoat viral gluten-free trust fund.
				Shoreditch cardigan street art poutine tumeric plaid. Cred adaptogen
				kale chips small batch meditation meggings. Skateboard pork belly yr,
				blog cliche locavore vice meggings cred tacos pabst meh heirloom. Ugh
				jianbing farm-to-table, YOLO echo park migas iPhone vegan. Kombucha
				meggings craft beer post-ironic raclette, franzen kogi forage swag banh
				mi. Fingerstache disrupt small batch, pop-up 90's food truck celiac
				listicle ramps chicharrones franzen everyday carry normcore gentrify
				occupy. Artisan raw denim migas pour-over cronut retro jianbing kitsch
				air plant VHS etsy franzen salvia vape. Raclette adaptogen green juice
				small batch aesthetic, portland locavore quinoa yuccie microdosing
				readymade vexillologist lo-fi salvia activated charcoal. Knausgaard
				forage umami williamsburg. Bushwick bespoke fashion axe pabst, meggings
				PBR&B yuccie gentrify. Meggings squid green juice 90's, palo santo
				polaroid raw denim everyday carry four loko. Ennui gluten-free pinterest
				schlitz 8-bit, leggings master cleanse echo park squid af. Raclette cred
				selfies, coloring book master cleanse blue bottle woke wayfarers
				mumblecore succulents. Seitan normcore 3 wolf moon chartreuse keytar la
				croix raw denim knausgaard gentrify palo santo skateboard. Gluten-free
				meditation blue bottle fashion axe, blog shoreditch chia. Semiotics you
				probably haven't heard of them messenger bag succulents, before they
				sold out kinfolk schlitz cold-pressed. Tattooed readymade gentrify fam
				cold-pressed fingerstache. Lo-fi activated charcoal prism pabst.
				Gentrify hella church-key, selfies vape pok pok tousled blog hell of
				tofu heirloom whatever succulents cornhole banjo. Unicorn single-origin
				coffee woke vice. Brooklyn hammock messenger bag occupy. Farm-to-table 3
				wolf moon snackwave kale chips biodiesel lyft pour-over YOLO shaman
				organic health goth. Next level typewriter flannel, synth kale chips
				tattooed man braid. Disrupt cray keytar crucifix, try-hard gastropub
				truffaut cred. Taxidermy flannel yuccie hoodie, tote bag cornhole
				drinking vinegar man braid hell of keffiyeh try-hard.
			</p>
			{/* <p>{props.content}</p> */}
			<button onClick={handleClick}>
				<DeleteIcon />
			</button>
		</EntryDiv>
	);
}

export default Entry;
