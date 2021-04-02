import React from 'react';
import styled from 'styled-components';

const DashboardMain = styled.main`
	margin: 0;
	height: 100vh;
	text-align: center;
	display: grid;
	grid-template-columns: repeat(8, 1fr 3fr);
`;

const DashboardContainer = styled.section`
	grid-column: 2 / 18;
	display: grid;
	grid-template-rows: 532px 2em;
	grid-template-columns: repeat(8, 32px 1fr 3fr);
`;

const HeaderOne = styled.h1`
	font-size: 3rem;
	color: #091133;
`;

const InputContainer = styled.div`
	padding: 16px 32px 8px 32px;
`;

const Label = styled.label`
	color: #767676;
	margin: 0 auto;
	text-align: left;
	display: flex;
	text-transform: uppercase;
	margin-bottom: 8px;
	font-weight: 700;
	font-size: 1.2rem;
`;

const InputStyle = styled.input`
	width: 384px;
	height: ${(props) => props.height || '40px'};
	border-radius: 8px;
	border: 1px solid #b0b8bc;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
`;

const ButtonDiv = styled.div`
	padding: ${(props) => props.padding || '24px'};
	margin: 0 auto;
	text-align: right;

	& a {
		margin: 0;
	}
`;

const Button = styled.button`
	width: 128px;
	height: 32px;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
	border-radius: 2px;

	border: 1px solid #111b47;
	font-decoration: none;

	&.primary {
		background-color: #111b47;
		color: #fff;
	}

	&.tertiary {
		color: #222f65;
		background-color: #fff;
		border: none;
	}
`;

function LogsOneCompose(props) {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>

<HeaderOne>Compose</HeaderOne>
<form class="" action="/compose" method="post">
      <div class="form-group">
        <Label>Title</Label>
        <input class="form-control" type="text" name="postTitle">
        <Label>Details</Label>
        <textarea class="form-control" name="postBody" rows="5" cols="30"></textarea>
      </div>


<ButtonDiv padding='8px 24px 8px 8px'>
			
				<Link>
					<Button type="submit" name="button"className='primary'>Publish</Button>
				</Link>
			</ButtonDiv>

    </form>

            </DashboardContainer>
		</DashboardMain>
	);
}

export default LogsOneCompose;
